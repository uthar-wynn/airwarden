import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { MonitorAdd } from "./monitor-add"

export const MonitorSidebar = () => {
    return (
        <div className="flex flex-col h-full text-primary w-full mt-14 bg-primary-foreground">
            <ScrollArea className="flex-1 px-3">
                <div className="mt-2">
                    {/* TODO: Add search */}
                </div>
                <Separator className="rounded-md my-2" />
                <div className="mb-2">
                    <MonitorAdd />
                </div>
            </ScrollArea>
        </div>
    )
}