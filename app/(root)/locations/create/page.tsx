import { AddLocation } from "./_components/add-location";

const LocationsCreatePage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    Locatie toevoegen
                </h2>
            </div>
            <AddLocation />
        </div>
    )
}

export default LocationsCreatePage;