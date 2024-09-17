import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LogbookWithLocationAndMonitor } from "@/types"
import { format } from "date-fns"

interface DisplayDetailsProps {
    logbook: LogbookWithLocationAndMonitor
}

export const DisplayDetails = ({
    logbook
}: DisplayDetailsProps) => {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                    <CardTitle className="group flex items-center gap-2 text-lg">
                        {logbook.user_name}
                    </CardTitle>
                    <CardDescription>
                        {format(logbook.date, "dd-MM-yy")}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">
                        Monitor
                    </div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Monitor</dt>
                            <dd>
                                {logbook.monitor.monitor_name}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Type</dt>
                            <dd>
                                {logbook.monitor.type}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Fabrikant</dt>
                            <dd>
                                {logbook.monitor.make}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Model</dt>
                            <dd>
                                {logbook.monitor.model}
                            </dd>
                        </div>
                    </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                    <div className="font-semibold">
                        Locatie
                    </div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Naam</dt>
                            <dd>
                                {logbook.location.site_code}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Straat</dt>
                            <dd>
                                {logbook.location.address_1}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Postcode</dt>
                            <dd>
                                {logbook.location.zip_code}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Gemeente</dt>
                            <dd>
                                {logbook.location.city}
                            </dd>
                        </div>
                    </dl>
                </div>
            </CardContent>
        </Card>
    )
}