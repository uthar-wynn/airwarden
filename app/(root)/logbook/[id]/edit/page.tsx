import { EmptyState } from "@/components/global/empty-state"
import { db } from "@/lib/db"
import { DisplayDetails } from "../_components/details"
import { EditLogbook } from "./_components/edit-logbook"

const LogbookEditPage = async ({ params }: { params: { id: string } }) => {
    const logbook = await db.logbook.findUnique({
        where: {
            id: params.id
        },
        include: {
            location: true,
            monitor: true
        }
    })

    if (!logbook) {
        return (
            <EmptyState
                title="Logboek niet gevonden"
                subtitle="Het lijkt erop dat er een fout is opgetreden!"
            />
        )
    }

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-4 gap-4">
                <EditLogbook
                    logbook={logbook}
                />
                <div className="flex flex-col my-3 px-3 space-y-2">
                    <DisplayDetails logbook={logbook} />
                </div>
            </div>
        </div>
    )
}

export default LogbookEditPage