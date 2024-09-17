"use client"

import { useModal } from "@/hooks/use-modal-store"
import { MonitorWithLocation } from "@/types"

interface MonitorItemProps {
    monitor: MonitorWithLocation
}

export const MonitorItem = ({
    monitor
}: MonitorItemProps) => {
    const { onOpen } = useModal()

    return (
        <div
            onClick={() => onOpen("editMonitor", { monitor })}
            className="col-span-1 cursor-pointer group"
        >
            <div className="font-semibold text-lg">
                {monitor.monitor_name}
            </div>
            <div className="font-light">
                {monitor.location.site_code}
            </div>
        </div>
    )
}