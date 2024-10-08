import { EmptyState } from "@/components/global/empty-state";
import { db } from "@/lib/db";
import { EditLocation } from "./_components/edit-location";

const LocationsEditPage = async ({ params }: { params: { id: string } }) => {
    const location = await db.locations.findUnique({
        where: { id: params.id }
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
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    Locatie bewerken
                </h2>
            </div>
            <EditLocation location={location} />
        </div>
    )
}

export default LocationsEditPage;