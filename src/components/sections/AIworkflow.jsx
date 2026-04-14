
import { Carousel } from "@/components/UIBuilds/Carousel.jsx"
import { AITechStack } from "@/components/UIBuilds/AItechstack.jsx"
import { WorkflowDiagram } from "@/components/UIBuilds/WorkFlowDiagram.jsx"


import figmaIcon from "@/assets/icons/figma.svg"
import dribbleIcon from "@/assets/icons/dribble.svg"
import jetbrainsIcon from "@/assets/icons/jetbrains.svg"
import claudeIcon from "@/assets/icons/claude.svg"
import githubIcon from "@/assets/icons/github.svg"
import notionIcon from "@/assets/icons/notion.svg"
import {cn} from "@heroui/react";

const ICONS = {
    notion: notionIcon,
    dribble: dribbleIcon,
    figma: figmaIcon,
    jetbrains: jetbrainsIcon,
    claude: claudeIcon,
    github: githubIcon,
}

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
        description: "Develop complete applications—from structuring frontend components and state management to implementing backend services, APIs, and database integration.”",
    },
    {
        number: "04",
        title: "Debug with AI",
        description: "Use AI-assisted workflows to enhance code quality, streamline debugging, and build efficient, scalable full-stack applications with modern technologies.",
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

function AIworkflow() {

    return (

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
            <div className="flex items-center justify-center gap-10 w-full pr-16">

                {/*Node Diagram*/}
                <WorkflowDiagram height={400} icons={ICONS} />

                {/*Carousel*/}
                <div className="shrink-0 w-80" style={{ height: "400px" }}>
                    <Carousel slides={SLIDES} interval={3000} />
                </div>
            </div>

            {/*TechStack*/}
            <div className="mt-10 w-full">
                <AITechStack />
            </div>

        </section>
    )
}

export default AIworkflow