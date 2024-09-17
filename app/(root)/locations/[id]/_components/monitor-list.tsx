import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Monitors } from "@prisma/client"
import Link from "next/link"

interface MonitorProps {
    monitors: Monitors[]
}

export const MonitorList = ({
    monitors
}: MonitorProps) => {

    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <CardTitle className="group flex items-center gap-2 text-lg">
                    Monitoren
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                {monitors.length > 0
                    ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Monitor</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Fabrikant</TableHead>
                                    <TableHead>Model</TableHead>
                                </TableRow>
                                {monitors.map((monitor) => (
                                    <TableRow key={monitor.id}>
                                        <TableCell>
                                            <Link href={`/monitors/${monitor.id}`}>
                                                {monitor.monitor_name}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{monitor.type}</TableCell>
                                        <TableCell>{monitor.make}</TableCell>
                                        <TableCell>{monitor.model}</TableCell>
                                    </TableRow>
                                ))}
                            </TableHeader>
                        </Table>
                    )
                    : (
                        <p className="text-muted-foreground justify-center text-center">
                            Geen monitoren gevonden voor deze locatie!
                        </p>
                    )}
            </CardContent>
        </Card>
    )
}