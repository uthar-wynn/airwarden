import { Heading } from "@/components/global/heading"
import { MonitorWithLocation } from "@/types"
import { MonitorItem } from "./monitor-item"

interface MonitorsListProps {
    monitors: MonitorWithLocation[]
}

export const MonitorsList = ({
    monitors
}: MonitorsListProps) => {
    return (
        <div className="mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <Heading
                title="Monitors"
                subtitle="Lijst van de VMM Monitoren"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {monitors.map((monitor) => (
                    <MonitorItem
                        key={monitor.id}
                        monitor={monitor}
                    />
                ))}
            </div>
        </div>
    )
}