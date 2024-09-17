import { AuditLog } from "@prisma/client"
import { ActivityIcon } from "lucide-react"
import { ActivityItem } from "./activity-item"
import { Card, CardContent } from "./ui/card"

interface ActivityLogProps {
    logs: AuditLog[]
}

export const Activity = ({
    logs
}: ActivityLogProps) => {
    return (
        <Card>
            <CardContent>
                <div className="flex items-start gap-x-3 w-full">
                    <ActivityIcon className="size-5 mt-0.5 text-neutral-700" />
                    <div className="w-full">
                        <p className="font-semibold text-neutral-700 mb-2">
                            Activity
                        </p>
                        <ol className="space-y-4 mt-4">
                            {logs.map((log) => (
                                <ActivityItem
                                    key={log.id}
                                    data={log}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}