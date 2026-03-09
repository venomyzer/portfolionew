import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart.jsx"

const chartData = [
    { month: "Graphic Design", skill: 250 },
    { month: "DBMS", skill: 200 },
    { month: "DSA", skill: 150 },
    { month: "OOPJ", skill: 250 },
    { month: "React", skill: 200 },
    { month: "UI/UX", skill: 250 },
]

const chartConfig = {
    skill: {
        label: "skill",
        color: "var(--chart-1)",
    },
}

export function ChartRadarDots() {
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-w-[550px] "
        >
            <RadarChart data={chartData}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <PolarAngleAxis dataKey="month" />
                <PolarGrid />
                <Radar
                    dataKey="skill"
                    fill="blue"
                    fillOpacity={0.5}
                    dot={{ r: 4, fillOpacity: 1 }}
                />
            </RadarChart>
        </ChartContainer>
    )
}