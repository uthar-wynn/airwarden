import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { Plus } from "lucide-react"
import Link from "next/link"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

const LogbookPage = async () => {
    const logs = await db.logbook.findMany({
        orderBy: {
            date: "desc"
        },
        include: {
            location: true,
            monitor: true
        }
    })

    return (
        <div className="flex-1 space-y-4 p-8 py-6">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        Logboeken ({logs.length})
                    </h2>
                    <p className="text-muted-foreground">
                        Een overzicht van de logboeken.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button asChild>
                        <Link href="/logbook/create">
                            <Plus className="size-4 mr-2" />
                            Toevoegen
                        </Link>
                    </Button>
                </div>
            </div>
            <DataTable
                data={logs}
                columns={columns}
            />
        </div>
    )
}

export default LogbookPage