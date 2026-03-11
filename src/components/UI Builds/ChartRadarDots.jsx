import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart.jsx"

// ── Data ──────────────────────────────────────────────────────────────────────

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
        label: "Skill Level",
        color: "#FFCC00",
    },
}

// ── Custom Label ──────────────────────────────────────────────────────────────

function CustomLabel({ x, y, cx, cy, payload }) {

    const value = payload?.value
    if (!value) return null

    const dx = x - cx
    const dy = y - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const LABEL_OFFSET = 22
    const nx = x + (dx / dist) * LABEL_OFFSET
    const ny = y + (dy / dist) * LABEL_OFFSET

    return (
        <text
            x={nx}
            y={ny}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={14}
            fill="#888"
            style={{ userSelect: "none", pointerEvents: "none" }}
        >
            {value}
        </text>
    )
}

export function ChartRadarDots() {
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-0 aspect-square min-w-[550px] max-w-[550px] [&>svg]:overflow-visible"
        >

            <RadarChart data={chartData} outerRadius={200} cx="50%" cy="50%">>
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                <PolarAngleAxis dataKey="month" tick={<CustomLabel />} />

                <PolarGrid />
                <Radar
                    dataKey="skill"
                    fill="#ff9f40"
                    fillOpacity={0.5}
                    dot={{ r: 4, fillOpacity: 1 }}
                />
            </RadarChart>
        </ChartContainer>
    )
}