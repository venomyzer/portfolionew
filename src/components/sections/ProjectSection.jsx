// ── ProjectsSection.jsx ───────────────────────────────────────────────────────
import { useState } from "react"
import { FeaturedCard, GridCard, PROJECTS } from "@/components/UI Builds/ProjectCard.jsx"

export default function ProjectSection() {
    // featuredId tracks which project is currently in the featured slot
    const [featuredId, setFeaturedId] = useState(PROJECTS[0].id)

    const featured = PROJECTS.find(p => p.id === featuredId)
    const grid = PROJECTS.filter(p => p.id !== featuredId)

    function handleGridClick(project) {
        // Swap clicked grid card into featured slot
        setFeaturedId(project.id)
    }

    return (
        <section className="w-full h-full flex flex-col justify-center select-none">

            {/* Header */}
            <div className="mb-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    What I Build?
                </p>
                <h2 className="text-5xl font-black">Case Study & Projects</h2>
            </div>

            {/* Layout — featured left, grid right */}
            <div className="flex gap-5 w-full" style={{ height: "560px" }}>

                {/* Featured card */}
                <FeaturedCard
                    project={featured}
                    className="w-[380px] shrink-0 h-full"
                />

                {/* Grid — 2x2 */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
                    {grid.map(project => (
                        <GridCard
                            key={project.id}
                            project={project}
                            onClick={() => handleGridClick(project)}
                            className="h-full"
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}