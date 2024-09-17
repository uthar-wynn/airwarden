import { useDashboard } from "@/hooks/use-dashboard-store";
import { ActivityCard } from "./_components/activity-card";
import { LocationsCard } from "./_components/locations";
import { LogbookCard } from "./_components/logbook";
import { MonitorsCard } from "./_components/monitors-card";

const DashboardPage = async () => {
    const { locations, monitors, logbooks, auditlogs } = await useDashboard()

    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Dashboard
                    </h2>
                </div>
                <div className="mx-auto flex flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
                    <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
                        <LocationsCard
                            locations={locations}
                        />
                        <MonitorsCard
                            monitors={monitors}
                        />
                    </div>
                    <div className="grid w-full flex-1 gap-6">
                        <LogbookCard
                            logbooks={logbooks}
                        />
                        <ActivityCard
                            logs={auditlogs}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;