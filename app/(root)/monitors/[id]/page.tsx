import { Activity } from "@/components/activity"
import { EmptyState } from "@/components/global/empty-state"
import { InfoLocation } from "@/components/info-location"
import { InfoMonitor } from "@/components/info-monitor"
import { db } from "@/lib/db"
import { Logbooks } from "./_components/logbooks"

const MonitorIdPage = async ({ params }: { params: { id: string } }) => {
    const monitor = await db.monitors.findUnique({
        where: { id: params.id },
        include: { location: true }
    })

    const logbooks = await db.logbook.findMany({
        where: {
            monitor_id: params.id
        }
    })

    const auditLogs = await db.auditLog.findMany({
        where: {
            entity_id: params.id
        },
        orderBy: { created_at: "desc" }
    })

    if (monitor === null) {
        return (
            <EmptyState
                title="Monitor niet gevonden"
                subtitle="Het lijkt erop dat er een fout is opgetreden!"
            />
        )
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div>
                        <InfoMonitor monitor={monitor} />
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <InfoLocation location={monitor.location} />
                        </div>
                    </div>
                </main>
                <div className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 space-y-4">
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

export default MonitorIdPage