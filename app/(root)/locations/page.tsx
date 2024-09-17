import { EmptyState } from "@/components/global/empty-state"
import { db } from "@/lib/db"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { LocationAdd } from "./_components/location-add"

const LocationsPage = async () => {
    const locations = await db.locations.findMany({
        orderBy: {
            site_code: "asc"
        }
    })

    if (locations.length === 0) {
        return (
            <EmptyState
                title="Geen stations gevonden"
                subtitle="Het lijkt erop dat er nog geen stations zijn toegevoegd!"
            />
        )
    }

    return (
        <div className="flex-1 space-y-4 p-8 py-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        Locaties ({locations.length})
                    </h2>
                    <p className="text-muted-foreground">
                        Een overzicht van alle meetlocaties van de Vlaamse Milieumaatschappij.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <LocationAdd />
                </div>
            </div>
            <DataTable
                data={locations}
                columns={columns}
            />
        </div>
    )
}

export default LocationsPage