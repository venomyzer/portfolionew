import { useRef } from "react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { Carousel } from "@/components/ui/carousel.jsx"
import { cn } from "@/lib/utils"

import figmaIcon from "@/assets/icons/figma.svg"
import dribbleIcon from "@/assets/icons/dribble.svg"
import webstormIcon from "@/assets/icons/webstorm.svg"
import claudeIcon from "@/assets/icons/claude.svg"
import githubIcon from "@/assets/icons/github.svg"
import notionIcon from "@/assets/icons/notion.svg"

const SLIDES = [
    {
        number: "01",
        title: "Planning & Research",
        description: "I start by exploring the web for the right libraries, components, and design references. Notion keeps everything organized while I map out the project scope.",
    },
    {
        number: "02",
        title: "Design",
        description: "With a clear plan in hand, I move into Figma and Dribbble to wireframe layouts, define the visual style, and prototype interactions before writing a single line of code.",
    },
    {
        number: "03",
        title: "Build",
        description: "I open WebStorm and start building the structure — components, routing, state. This is where the design becomes real code.",
    },
    {
        number: "04",
        title: "Refine with AI",
        description: "Claude helps me style components, debug tricky issues, and find smarter ways to do things. It's an iterative back-and-forth that makes the final result much tighter.",
    },
    {
        number: "05",
        title: "Ship",
        description: "Once everything is polished and tested, I push to GitHub and deploy. Clean commits, proper versioning, and it's live.",
    },
]

function Node({ refProp, icon, size = 64, className }) {
    return (
        <div
            ref={refProp}
            style={{ width: size, height: size }}
            className={cn(
                "absolute z-10 flex items-center justify-center rounded-full border-2 bg-background shadow-md shrink-0 -translate-x-1/2 -translate-y-1/2",
                className
            )}
        >
            <img src={icon} alt="" className="h-8 w-8 object-contain" />
        </div>
    )
}

export function AIworkflow() {
    const containerRef = useRef(null)
    const notionRef = useRef(null)
    const dribbleRef = useRef(null)
    const figmaRef = useRef(null)
    const webstormRef = useRef(null)
    const claudeRef = useRef(null)
    const githubRef = useRef(null)

    const H = 400

    return (
        // ✅ No padding here — controlled from App.jsx
        <section className="w-full h-full flex flex-col justify-start mt-10 select-none">

            {/* Header */}
            <div className="mb-20 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    How I Work?
                </p>
                <h2 className="text-5xl font-black mb-5">AI Powered Workflow</h2>
                <h3 className="text-2xl font-regular text-black/50">
                    "I combine design intuition with AI-assisted development<br/>to move from idea to production faster."
                </h3>
            </div>

            {/* Main layout */}
            <div className="flex items-center justify-center gap-10 w-full">

                {/* LEFT — Beam Diagram */}
                <div
                    ref={containerRef}
                    className="relative"
                    style={{ height: `${H}px`, width: "65%" }}
                >
                    {/* Notion — top left */}
                    <div style={{ position: "absolute", left: "10%", top: "15%" }}>
                        <Node refProp={notionRef} icon={notionIcon} size={60} className="border-gray-300" />
                    </div>

                    {/* Dribbble — middle left */}
                    <div style={{ position: "absolute", left: "10%", top: "50%" }}>
                        <Node refProp={dribbleRef} icon={dribbleIcon} size={60} className="border-pink-500 bg-pink-500" />
                    </div>

                    {/* Figma — bottom left */}
                    <div style={{ position: "absolute", left: "10%", top: "85%" }}>
                        <Node refProp={figmaRef} icon={figmaIcon} size={60} className="border-purple-300" />
                    </div>

                    {/* WebStorm — center hub */}
                    <div style={{ position: "absolute", left: "40%", top: "50%" }}>
                        <Node refProp={webstormRef} icon={webstormIcon} size={70} className="border-blue-400" />
                    </div>

                    {/* Claude — center-right */}
                    <div style={{ position: "absolute", left: "65%", top: "50%" }}>
                        <Node refProp={claudeRef} icon={claudeIcon} size={70} className="border-orange-500 bg-orange-500" />
                    </div>

                    {/* GitHub — right */}
                    <div style={{ position: "absolute", left: "90%", top: "50%" }}>
                        <Node refProp={githubRef} icon={githubIcon} size={60} className="border-gray-400" />
                    </div>

                    {/* BEAMS */}
                    <AnimatedBeam containerRef={containerRef} fromRef={notionRef} toRef={webstormRef}
                                  curvature={-20} gradientStartColor="#6b7280" gradientStopColor="#3b82f6" />
                    <AnimatedBeam containerRef={containerRef} fromRef={dribbleRef} toRef={webstormRef}
                                  gradientStartColor="#ec4899" gradientStopColor="#3b82f6" />
                    <AnimatedBeam containerRef={containerRef} fromRef={figmaRef} toRef={webstormRef}
                                  curvature={20} gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" />
                    <AnimatedBeam containerRef={containerRef} fromRef={webstormRef} toRef={claudeRef}
                                  curvature={70} gradientStartColor="#3b82f6" gradientStopColor="#f97316" />
                    <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={webstormRef}
                                  reverse={true} curvature={-70} gradientStartColor="#f97316"
                                  gradientStopColor="#3b82f6" delay={1.5} />
                    <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={githubRef}
                                  gradientStartColor="#f97316" gradientStopColor="#6b7280" />
                </div>

                {/* RIGHT — Carousel */}
                <div className="shrink-0 w-80" style={{ height: `${H}px` }}>
                    <Carousel slides={SLIDES} interval={3000} />
                </div>

            </div>
        </section>
    )
}