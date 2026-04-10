import { useRef } from "react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { cn } from "@/lib/utils"

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

export function WorkflowDiagram({ height = 400, icons }) {
    const containerRef = useRef(null)
    const notionRef = useRef(null)
    const dribbleRef = useRef(null)
    const figmaRef = useRef(null)
    const jetbrainsRef = useRef(null)
    const claudeRef = useRef(null)
    const githubRef = useRef(null)

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ height, width: "65%" }}
        >
            {/* Notion — top left */}
            <div style={{ position: "absolute", left: "10%", top: "15%" }}>
                <Node refProp={notionRef} icon={icons.notion} size={60} className="border-gray-300" />
            </div>

            {/* Dribbble — middle left */}
            <div style={{ position: "absolute", left: "10%", top: "50%" }}>
                <Node refProp={dribbleRef} icon={icons.dribble} size={60} className="border-pink-500 bg-pink-500" />
            </div>

            {/* Figma — bottom left */}
            <div style={{ position: "absolute", left: "10%", top: "85%" }}>
                <Node refProp={figmaRef} icon={icons.figma} size={60} className="border-purple-200" />
            </div>

            {/* Jetbrains — center hub */}
            <div style={{ position: "absolute", left: "40%", top: "50%" }}>
                <Node refProp={jetbrainsRef} icon={icons.jetbrains} size={70} className="border-rose-300" />
            </div>

            {/* Claude — center-right */}
            <div style={{ position: "absolute", left: "65%", top: "50%" }}>
                <Node refProp={claudeRef} icon={icons.claude} size={70} className="border-orange-500 bg-orange-500" />
            </div>

            {/* GitHub — right */}
            <div style={{ position: "absolute", left: "90%", top: "50%" }}>
                <Node refProp={githubRef} icon={icons.github} size={60} className="border-gray-400" />
            </div>

            {/* BEAMS */}
            <AnimatedBeam containerRef={containerRef} fromRef={notionRef} toRef={jetbrainsRef}
                          curvature={-20} gradientStartColor="#6b7280" gradientStopColor="#3b82f6" />
            <AnimatedBeam containerRef={containerRef} fromRef={dribbleRef} toRef={jetbrainsRef}
                          gradientStartColor="#ec4899" gradientStopColor="#3b82f6" />
            <AnimatedBeam containerRef={containerRef} fromRef={figmaRef} toRef={jetbrainsRef}
                          curvature={20} gradientStartColor="#8b5cf6" gradientStopColor="#3b82f6" />
            <AnimatedBeam containerRef={containerRef} fromRef={jetbrainsRef} toRef={claudeRef}
                          curvature={70} gradientStartColor="#3b82f6" gradientStopColor="#f97316" />
            <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={jetbrainsRef}
                          reverse={true} curvature={-70} gradientStartColor="#f97316"
                          gradientStopColor="#3b82f6" delay={1.5} />
            <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={githubRef}
                          gradientStartColor="#f97316" gradientStopColor="#6b7280" />
        </div>
    )
}