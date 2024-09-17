import { EmptyState } from "@/components/global/empty-state"
import { MonitorAdd } from "@/components/monitor/monitor-add"
import { db } from "@/lib/db"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

const MonitorsPage = async () => {
    const monitors = await db.monitors.findMany({
        include: {
            location: true
        },
        orderBy: {
            monitor_name: "asc"
        }
    })

    if (monitors.length === 0) {
        return (
            <EmptyState
                title="Geen monitoren gevonden"
                subtitle="Het lijkt erop dat er nog geen monitors zijn toegevoegd!"
            />
        )
    }

    return (
        <div className="flex-1 space-y-4 p-8 py-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        Monitoren ({monitors.length})
                    </h2>
                    <p className="text-muted-foreground">
                        Lijst van de monitoren van de Vlaamse Milieumaatschappij.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <MonitorAdd />
                </div>
            </div>
            <hr />
            <DataTable
                data={monitors}
                columns={columns}
            />
        </div>
    )
}

export default MonitorsPage