
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Smartphone } from "lucide-react"

// ── Update when mobile portfolio is live ──
const MOBILE_PORTFOLIO_URL = "https://bibek.zerolink.co.in"

// ── Safe detection ──
function isMobileOrTablet() {
    if (typeof window === "undefined") return false

    const byWidth = window.innerWidth < 1024
    const byUA = /android|iphone|ipad|ipod|tablet|touch|mobile/i.test(
        navigator.userAgent
    )
    const byTouch = navigator.maxTouchPoints > 1

    return byWidth || byUA || byTouch
}

export function MobileRedirect() {
    const show = typeof window !== "undefined" && isMobileOrTablet()

    if (!show) return null

    return (
        <Dialog open={show}>
            <DialogContent
                onEscapeKeyDown={(e) => e.preventDefault()}
                onInteractOutside={(e) => e.preventDefault()}
                onPointerDownOutside={(e) => e.preventDefault()}
                className="[&>button]:hidden w-[92vw] max-w-sm rounded-3xl border border-border bg-white p-0 overflow-hidden shadow-2xl flex flex-col gap-0"
            >
                {/* ── Header ── */}
                <div
                    className="w-full flex flex-col items-center justify-center gap-3 py-10 px-6"
                    style={{
                        background:
                            "linear-gradient(180deg, #2e2d2d 0%, #1f1f1f 50%, #000000 100%)",
                    }}
                >
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/50">
                        <Smartphone className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>

                    <DialogTitle className="text-white text-2xl font-black text-center leading-tight mt-1">
                        Built for<br />Desktop
                    </DialogTitle>

                    <DialogDescription className="text-white/75 text-sm text-center leading-relaxed">
                        This portfolio is a high-fidelity desktop experience. I have built a
                        This portfolio is a high-fidelity desktop experience. I have built a
                        dedicated touch-friendly version just for you.
                    </DialogDescription>
                </div>

                {/* ── Bottom ── */}
                <div className="flex flex-col gap-3 px-6 py-6 bg-black">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="flex-1 h-px bg-border" />
                            <span className="text-xs text-muted-foreground font-medium">
                                BETTER EXPERIENCE AVAILABLE
                            </span>
                        <div className="flex-1 h-px bg-border" />
                    </div>

                    <a
                        href={MOBILE_PORTFOLIO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <Button
                            className="w-full rounded-2xl py-6 text-base font-bold gap-2"
                            style={{
                                color: "#000000",
                                background: "linear-gradient(135deg, #ffffff, #ffffff",
                                border: "none",
                            }}
                        >
                            Take me there
                            <ArrowUpRight className="w-5 h-5" />
                        </Button>
                    </a>

                    <p className="text-center text-xs text-muted-foreground/100 mt-1">
                        Optimised for mobile &amp; tablet · Touch friendly
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}