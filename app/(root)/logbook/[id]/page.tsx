import { Activity } from "@/components/activity";
import { EmptyState } from "@/components/global/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/db";
import { Pencil, X } from "lucide-react";
import Link from "next/link";
import { DisplayDetails } from "./_components/details";

const LogbookIdPage = async ({ params }: { params: { id: string } }) => {
    const logbook = await db.logbook.findUnique({
        where: {
            id: params.id
        },
        include: {
            location: true,
            monitor: true
        }
    })

    const auditLogs = await db.auditLog.findMany({
        where: { entity_id: params.id }
    })

    if (logbook === null) {
        return (
            <EmptyState
                title="Logboek niet gevonden"
                subtitle="Het lijkt erop dat er een fout is opgetreden!"
            />
        )
    }

    return (
        <div className="flex flex-col">
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                    <div className="my-3 space-y-2 px-3">
                        <div className="space-y-8 px-6">
                            <Input
                                disabled
                                value={logbook.title}
                            />
                            <Textarea
                                placeholder="Vul de beschrijving of oplossing in"
                                className="flex-1 lg:min-h-80"
                                disabled
                                value={logbook.solution || ""}
                            />
                        </div>
                        <div className="px-6 py-4 space-x-3">
                            <Button asChild>
                                <Link href={`/logbook/${logbook.id}/edit`}>
                                    <Pencil className="size-4 mr-2" />
                                    Bewerken
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href={"/logbook"}>
                                    <X className="size-4 mr-2" />
                                    Annuleren
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-3 px-3 space-y-2">
                    <DisplayDetails
                        logbook={logbook}
                    />
                </div>
            </div>
            <div className="p-2">
                <Activity logs={auditLogs} />
            </div>
        </div>
    )
}

export default LogbookIdPage;