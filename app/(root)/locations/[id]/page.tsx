import { Activity } from "@/components/activity"
import { EmptyState } from "@/components/global/empty-state"
import { InfoLocation } from "@/components/info-location"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/db"
import { Logbooks } from "./_components/logbooks"
import { MonitorList } from "./_components/monitor-list"

const LocationIdPage = async ({ params }: { params: { id: string } }) => {
    const location = await db.locations.findUnique({
        where: { id: params.id }
    })

    const monitors = await db.monitors.findMany({
        where: { location_id: params.id }
    })

    const logbooks = await db.logbook.findMany({
        where: { location_id: params.id },
        include: {
            location: true,
            monitor: true
        }
    })

    const auditLogs = await db.auditLog.findMany({
        where: {
            entity_id: params.id
        },
        orderBy: { created_at: "desc" }
    })

    if (location === null) {
        return (
            <EmptyState
                title="Locatie niet gevonden"
                subtitle="Het lijkt erop dat er een fout is opgetreden!"
            />
        )
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div>
                        <InfoLocation location={location} />
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card className="sm:col-span-2">
                                <CardHeader className="pb-3">
                                    <CardTitle>
                                        Routebeschrijving
                                    </CardTitle>
                                    <CardDescription className="text-balance leading-relaxed">
                                        {location.itinerary}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle>
                                        Toegangs Procedure
                                    </CardTitle>
                                    <CardDescription className="text-balance leading-relaxed">
                                        {location.access_procedure}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle>
                                        Opmerkingen
                                    </CardTitle>
                                    <CardDescription className="text-balance leading-relaxed">
                                        {location.comments}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </main>
                <div className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 space-y-4">
                    <MonitorList
                        monitors={monitors}
                    />
                    <Logbooks
                        logbooks={logbooks}
                    />
                    <Activity
                        logs={auditLogs}
                    />
                </div>
            </div>
        </div>
    )
}

export default LocationIdPage