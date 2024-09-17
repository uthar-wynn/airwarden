import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogbookWithLocationAndMonitor } from "@/types"
import { format } from "date-fns"
import { Eye } from "lucide-react"
import Link from "next/link"

interface LogTableProps {
    logbooks: LogbookWithLocationAndMonitor[]
}

export const LogTable = ({
    logbooks
}: LogTableProps) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>
                        Toestel
                    </TableHead>
                    <TableHead>
                        Titel
                    </TableHead>
                    <TableHead className="text-right">
                        Uitvoerder
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {logbooks.map((log) => (
                    <TableRow key={log.id}>
                        <TableCell>
                            <Link href={`/logbook/${log.id}`}>
                                <Eye className="size-3.5" />
                            </Link>
                        </TableCell>
                        <TableCell>
                            <div className="font-medium">
                                {log.monitor.monitor_name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {log.location.site_code}
                            </div>
                        </TableCell>
                        <TableCell className="truncate">
                            {log.title}
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="font-medium">
                                {log.user_name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {format(log.date, "dd MMM yy hh:mm p")}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}