import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitors } from "@prisma/client"

interface InfoMoniorProps {
    monitor: Monitors
}

export const InfoMonitor = ({
    monitor
}: InfoMoniorProps) => {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <CardTitle className="group flex items-center gap-2 text-lg">
                    {monitor.monitor_name}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">
                        Details
                    </div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Serienummer</dt>
                            <dd>
                                {monitor.serial_number}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Type</dt>
                            <dd>
                                {monitor.type}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Fabrikant</dt>
                            <dd>
                                {monitor.make}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Model</dt>
                            <dd>
                                {monitor.model}
                            </dd>
                        </div>
                    </dl>
                </div>
            </CardContent>
        </Card>
    )
}