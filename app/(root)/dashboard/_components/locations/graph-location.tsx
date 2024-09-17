"use client"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Locations } from "@prisma/client"
import { Pie, PieChart } from "recharts"

interface LocationGraphProps {
    locations: Locations[]
}

export const GraphLocation = ({
    locations
}: LocationGraphProps) => {
    const activeLocations = locations.filter(location => location.enabled).length
    const inactiveLocations = locations.filter(location => !location.enabled).length

    const chartData = [
        { name: "Actief", count: activeLocations, fill: "#4ade80" },
        { name: "Niet Actief", count: inactiveLocations, fill: "#f87171" },
    ]

    const chartConfig = {
        status: {
            label: "Something"
        },
        active: {
            label: "Actief"
        },
        non_active: {
            label: "Niet Actief"
        }
    } satisfies ChartConfig

    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
        >
            <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartData} dataKey="count" nameKey="name" />
            </PieChart>
        </ChartContainer>
    )
}