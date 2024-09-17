import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LogbookWithLocationAndMonitor } from "@/types"
import { format } from "date-fns"
import { RowAction } from "./row-action"

interface LogbooksProps {
    logbooks: LogbookWithLocationAndMonitor[]
}

export const Logbooks = ({
    logbooks
}: LogbooksProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <CardTitle className="group flex items-center gap-2 text-lg">
                    Logs
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                {logbooks.length > 0
                    ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Monitor</TableHead>
                                    <TableHead>Titel</TableHead>
                                    <TableHead>Datum</TableHead>
                                    <TableHead>Auteur</TableHead>
                                </TableRow>
                            </TableHeader>
                            {logbooks.map((book) => (
                                <TableRow key={book.id}>
                                    <TableCell>
                                        <RowAction
                                            id={book.id}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {book.monitor.monitor_name}
                                    </TableCell>
                                    <TableCell>
                                        {book.title}
                                    </TableCell>
                                    <TableCell>
                                        {format(book.date, "dd MMM yyyy")}
                                    </TableCell>
                                    <TableCell>
                                        {book.user_name}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    )
                    : (
                        <p className="text-muted-foreground justify-center text-center">
                            Geen logboeken gevonden voor deze locatie!
                        </p>
                    )}
            </CardContent>
        </Card>
    )
}