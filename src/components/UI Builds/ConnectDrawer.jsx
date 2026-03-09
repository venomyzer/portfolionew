import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer"
import { CheckCircle } from "lucide-react"

const PROJECT_TYPES = ["UI/UX", "Web Dev", "Graphic Design", "Mobile App"]
const TIMELINES = ["ASAP", "1 Month", "3 Months", "Flexible"]

export function ConnectDrawer({ open, onClose }) {
    const [selectedTypes, setSelectedTypes] = React.useState([])
    const [selectedTimeline, setSelectedTimeline] = React.useState(null)
    const [budget, setBudget] = React.useState([1000])
    const [message, setMessage] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [submitted, setSubmitted] = React.useState(false)

    function toggleType(type) {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        )
    }

    function handleSend() {
        if (!email) return
        setSubmitted(true)
    }

    function handleClose() {
        setSelectedTypes([])
        setSelectedTimeline(null)
        setBudget([1000])
        setMessage("")
        setEmail("")
        setSubmitted(false)
        onClose()
    }

    function formatBudget(val) {
        if (val >= 10000) return "$10,000+"
        return `$${val.toLocaleString()}`
    }

    return (
        <Drawer open={open} onClose={handleClose}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-4xl px-6">

                    <DrawerHeader className="text-center pb-4">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase cursor-none">
                                Open to work · Replies within 24h
                            </span>
                        </div>
                        <DrawerTitle className="text-2xl font-bold cursor-none">
                            Let's Build Something
                        </DrawerTitle>
                        <DrawerDescription className="cursor-none">
                            Tell me about your project and I'll get back to you shortly.
                        </DrawerDescription>
                    </DrawerHeader>

                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                            <CheckCircle className="h-16 w-16 text-green-500" strokeWidth={1.5} />
                            <h3 className="text-xl font-semibold cursor-none">Message Sent!</h3>
                            <p className="text-muted-foreground text-sm max-w-xs cursor-none">
                                Thanks for reaching out. I'll get back to you at{" "}
                                <span className="font-medium text-foreground">{email}</span> within 24 hours.
                            </p>
                            <Button className="mt-2 cursor-none" onClick={handleClose}>Close</Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-10 pb-6">

                            {/* LEFT */}
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium cursor-none">What do you need?</label>
                                    <div className="flex flex-wrap gap-2">
                                        {PROJECT_TYPES.map(type => (
                                            <button
                                                key={type}
                                                onClick={() => toggleType(type)}
                                                className={`cursor-none px-3 py-1.5 rounded-full text-sm border transition-all duration-200 font-medium
                                                    ${selectedTypes.includes(type)
                                                    ? "bg-foreground text-background border-foreground"
                                                    : "bg-transparent text-foreground border-border hover:border-foreground"
                                                }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium cursor-none">Budget</label>
                                        <span className="text-sm font-semibold tabular-nums cursor-none">
                                            {formatBudget(budget[0])}
                                        </span>
                                    </div>
                                    <div className="cursor-none">
                                        <Slider
                                            min={100}
                                            max={10000}
                                            step={100}
                                            value={budget}
                                            onValueChange={setBudget}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground cursor-none">
                                        <span>$100</span>
                                        <span>$10,000+</span>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium cursor-none">Timeline</label>
                                    <div className="flex flex-wrap gap-2">
                                        {TIMELINES.map(t => (
                                            <button
                                                key={t}
                                                onClick={() => setSelectedTimeline(t)}
                                                className={`cursor-none px-3 py-1.5 rounded-full text-sm border transition-all duration-200 font-medium
                                                    ${selectedTimeline === t
                                                    ? "bg-foreground text-background border-foreground"
                                                    : "bg-transparent text-foreground border-border hover:border-foreground"
                                                }`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium cursor-none">Describe your idea</label>
                                    <Textarea
                                        placeholder="I need a portfolio site with..."
                                        className="resize-none cursor-none h-36"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium cursor-none">Your email</label>
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="cursor-none"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    <Button
                                        className="flex-1 cursor-none"
                                        onPointerDown={handleSend}
                                        disabled={!email}
                                    >
                                        Send Message
                                    </Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className="cursor-none" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                    </DrawerClose>
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </DrawerContent>
        </Drawer>
    )
}