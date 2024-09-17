import { ActivityItem } from "@/components/activity-item"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AuditLog } from "@prisma/client"

interface ActivityCardProps {
    logs: AuditLog[]
}

export const ActivityCard = ({
    logs
}: ActivityCardProps) => {
    return (
        <Card>
            <CardHeader className="flex items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                    Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ol className="space-y-4 mt-4">
                    {logs.map((log) => (
                        <ActivityItem
                            key={log.id}
                            data={log}
                        />
                    ))}
                </ol>
            </CardContent>
        </Card>
    )
}