import { db } from "@/lib/db";
import { AddLogbook } from "./_components/add-logbook";

const CreateLogBook = async () => {
    const locations = await db.locations.findMany({
        where: {
            enabled: true
        },
        orderBy: {
            site_code: "asc"
        }
    })

    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Logboek toevoegen
                    </h2>
                </div>
            </div>
            <AddLogbook locations={locations} />
        </div>
    )
}

export default CreateLogBook;