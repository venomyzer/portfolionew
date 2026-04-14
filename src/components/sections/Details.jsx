import { SkillsPanel } from "@/components/UIBuilds/SkillPanel.jsx"
import {ChartRadarDots} from "@/components/UIBuilds/ChartRadarDots.jsx";


function Details() {
    return (
        <div className="mt-10 flex flex-col gap-10">

            {/* Header */}
            <div className="mb-10 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    What I Know?
                </p>
                <h2 className="text-5xl font-black mb-5">Skills & Subjects</h2>
                <h3 className="text-2xl font-regular text-black/50">
                    "I combine design intuition with AI-assisted development<br/>to move from idea to production faster."
                </h3>
            </div>

            <div className="flex gap-20 justify-center items-center">

                <SkillsPanel />

                <ChartRadarDots />
            </div>
        </div>

    )
}

export default Details
