import { ProjectCard, CERTS } from "@/components/UI Builds/Projects.jsx"


function ProjectSection() {
    const [wide, tall, ...small] = CERTS

    return (
        <section className="w-full h-full flex flex-col justify-center items-center select-none">

            {/* Header */}
            <div className="mb-20 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    What I Work On?
                </p>
                <h2 className="text-5xl font-black mb-5">Projects & Case Studies</h2>
                <h3 className="text-2xl font-regular text-black/50">
                    "Real-world projects showcasing my skills in full-stack development,<br/> problem-solving, and modern web technologies."
                </h3>
            </div>

            {/* Bento Grid */}
            <div
                className="grid grid-cols-[1.75fr_1.75fr_1fr] grid-rows-2 gap-4"
                style={{ height: "580px", width: "1300px" }}
            >
                {/* Wide card — col 1, row 1 */}
                <div className="col-span-2 row-span-1 h-full">
                    <ProjectCard cert={wide} />
                </div>

                {/* Tall card — col 3, rows 1-2 */}
                <div className="col-start-3 row-span-2 h-full">
                    <ProjectCard cert={tall} />
                </div>

                {/* Normal cards — col 1 and 2, row 2 */}
                {small.map((cert) => (
                    <div key={cert.id} className="col-span-1 row-span-1 h-full">
                        <ProjectCard cert={cert} />
                    </div>
                ))}

            </div>

        </section>
    )
}

export default ProjectSection