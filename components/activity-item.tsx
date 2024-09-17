import { generateLogMessage } from "@/lib/generate-log-message"
import { AuditLog } from "@prisma/client"
import { format } from "date-fns"
import { Avatar, AvatarImage } from "./ui/avatar"

interface ActivityItemProps {
    data: AuditLog
}

export const ActivityItem = ({
    data
}: ActivityItemProps) => {
    return (
        <li className="flex items-center gap-x-2">
            <Avatar className="size-8">
                <AvatarImage src={data.user_image} />
            </Avatar>
            <div className="flex flex-col space-y-0.5">
                <p className="text-sm text-muted-foreground">
                    <span className="font-semibold lowercase text-neutral-700">
                        {data.user_name}
                    </span>&nbsp;
                    {generateLogMessage(data)}
                </p>
                <p className="text-xs text-muted-foreground">
                    {format(new Date(data.created_at), "MMM d, yyyy 'at' h:mm a")}
                </p>
            </div>
        </li>
    )
}