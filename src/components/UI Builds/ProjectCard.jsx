// ── ProjectCard.jsx — UI Build ────────────────────────────────────────────────
import { cn } from "@/lib/utils"

export const PROJECTS = [
    {
        id: 1,
        title: "Advanced Portfolio",
        description: "A personal portfolio website built with React, Vite and Tailwind. Features animated beams, smooth cursor, MagicUI components and an AI-powered workflow section.",
        brandName: "Bibek",
        brandLogo: null,
        thumbnailGradient: "linear-gradient(135deg, #818cf8, #6366f1)",
        techIcons: ["Re", "Vi", "Tw"],
        websiteUrl: "#",
        githubUrl: "#",
        accentColor: "#6366f1",
    },
    {
        id: 2,
        title: "Cafe Brand Identity",
        description: "Full packaging and brand design for a local cafe — logo, color system, packaging mockups and social media kit.",
        brandName: "Cafe Project",
        brandLogo: null,
        thumbnailGradient: "linear-gradient(135deg, #fbbf24, #ea580c)",
        techIcons: ["Fi", "Ai"],
        websiteUrl: "#",
        githubUrl: null,
        accentColor: "#f97316",
    },
    {
        id: 3,
        title: "Hiring Form",
        description: "A serverless hiring form with Google Sheets backend. Submissions pipe directly into a structured spreadsheet.",
        brandName: "Internal Tool",
        brandLogo: null,
        thumbnailGradient: "linear-gradient(135deg, #34d399, #0d9488)",
        techIcons: ["JS", "Sh"],
        websiteUrl: "#",
        githubUrl: "#",
        accentColor: "#10b981",
    },
    {
        id: 4,
        title: "Browser Extension",
        description: "A lightweight Chrome extension for saving and restoring tab groups. Built with vanilla JS.",
        brandName: "Tab Saver",
        brandLogo: null,
        thumbnailGradient: "linear-gradient(135deg, #38bdf8, #1d4ed8)",
        techIcons: ["JS", "HT", "CS"],
        websiteUrl: null,
        githubUrl: "#",
        accentColor: "#3b82f6",
    },
    {
        id: 5,
        title: "SaaS Landing Page",
        description: "A conversion-focused landing page for a fictional AI writing tool. Built with animations and full responsiveness.",
        brandName: "WriteAI",
        brandLogo: null,
        thumbnailGradient: "linear-gradient(135deg, #f472b6, #be123c)",
        techIcons: ["Re", "Tw"],
        websiteUrl: "#",
        githubUrl: "#",
        accentColor: "#ec4899",
    },
]

// ── Folder Header ─────────────────────────────────────────────────────────────
function FolderHeader({ brandLogo, brandName, techIcons, thumbnailGradient, showTitle, title, bg = "#ffffff", headerHeight = 200 }) {
    const NOTCH_H = 44
    const NOTCH_W = 150
    const PAD = 10

    return (
        <div className="relative w-full" style={{
            background: bg,
            paddingLeft: PAD,
            paddingRight: PAD,
            paddingBottom: PAD,
            paddingTop: PAD,
        }}>

            {/* Gradient block — all 4 corners specified individually so top-left can be different */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    background: thumbnailGradient,
                    borderTopLeftRadius: 8,     // ← soft rounded, not sharp, not as round as others
                    borderTopRightRadius: 14,
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14,
                    height: headerHeight,
                }}
            >
                {showTitle && (
                    <div
                        className="absolute left-0 right-0 bottom-0 px-4 py-3"
                        style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 70%, transparent 100%)",
                            zIndex: 2,
                        }}
                    >
                        <h3 className="text-base font-black text-white select-none">{title}</h3>
                    </div>
                )}
            </div>

            {/* White notch — skewed tab */}
            <div style={{
                position: "absolute",
                top: PAD,
                left: PAD,
                height: NOTCH_H,
                width: NOTCH_W,
                background: bg,
                borderBottomRightRadius: 12,
                transform: "skew(-35deg)",
                transformOrigin: "top left",
                boxShadow: `-30px 0 0 0 ${bg}`,
                zIndex: 3,
            }} />

            {/* Concave corner */}
            <div style={{
                position: "absolute",
                top: PAD,
                left: PAD + NOTCH_W - 18,
                width: 20,
                height: 20,
                background: "transparent",
                borderTopLeftRadius: 14,
                boxShadow: `-6px -6px 0 2px ${bg}`,
                zIndex: 4,
            }} />

            {/* Brand pill */}
            <div
                className="absolute flex items-center gap-2"
                style={{ top: PAD + 10, left: PAD + 10, zIndex: 5 }}
            >
                {brandLogo && (
                    <img src={brandLogo} alt={brandName} className="h-4 w-4 object-contain" />
                )}
                <span className="text-sm font-semibold select-none text-foreground">{brandName}</span>
            </div>

            {/* Tech icons */}
            <div
                className="absolute flex gap-2"
                style={{ top: PAD + 8, right: PAD + 10, zIndex: 5 }}
            >
                {techIcons.map(icon => (
                    <div
                        key={icon}
                        className="flex items-center justify-center rounded-full"
                        style={{
                            width: 30,
                            height: 30,
                            background: bg,
                            border: "1px solid rgba(0,0,0,0.06)",
                        }}
                    >
                        <span className="text-[9px] font-bold select-none text-foreground/70">{icon}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

// ── Featured Card ─────────────────────────────────────────────────────────────
export function FeaturedCard({ project, className }) {
    return (
        <div className={cn("flex flex-col rounded-2xl border border-border bg-white overflow-hidden", className)}>
            <FolderHeader
                brandName={project.brandName}
                brandLogo={project.brandLogo}
                techIcons={project.techIcons}
                thumbnailGradient={project.thumbnailGradient}
                showTitle={false}
                headerHeight={190}
                bg="#ffffff"
            />

            <div className="flex flex-col gap-3 px-4 py-3 flex-1">
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                <div className="flex gap-3 mt-2">
                    {project.websiteUrl && (
                        <a href={project.websiteUrl} target="_blank" rel="noreferrer"
                           className="flex-1 py-2.5 rounded-full bg-muted text-center text-sm font-semibold hover:bg-muted/70 transition-colors cursor-none">
                            Website
                        </a>
                    )}
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer"
                           className="flex-1 py-2.5 rounded-full bg-muted text-center text-sm font-semibold hover:bg-muted/70 transition-colors cursor-none">
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

// ── Grid Card ─────────────────────────────────────────────────────────────────
export function GridCard({ project, onClick, className }) {
    return (
        <div
            onClick={onClick}
            style={{ "--accent": project.accentColor }}
            className={cn(
                "group rounded-2xl border border-border bg-white overflow-hidden cursor-none",
                "transition-all duration-300",
                "hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_var(--accent)]",
                className
            )}
        >
            <FolderHeader
                brandName={project.brandName}
                brandLogo={project.brandLogo}
                techIcons={project.techIcons}
                thumbnailGradient={project.thumbnailGradient}
                showTitle={true}
                title={project.title}
                headerHeight={120}
                bg="#ffffff"
            />
        </div>
    )
}