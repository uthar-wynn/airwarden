import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogbookWithLocationAndMonitor } from "@/types"
import { ArrowLeft, BookText, Plus } from "lucide-react"
import Link from "next/link"
import { LogTable } from "./log-table"

interface LogbookCardProps {
    logbooks: LogbookWithLocationAndMonitor[]
}

export const LogbookCard = ({
    logbooks
}: LogbookCardProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Log boeken
                </CardTitle>
                <BookText className="size-4" />
            </CardHeader>
            <CardContent>
                <LogTable
                    logbooks={logbooks}
                />
            </CardContent>
            <CardFooter className="space-x-2">
                <Button size="sm" variant="ghost" className="gap-1" asChild>
                    <Link href="/logbook">
                        <ArrowLeft className="size-3.5" />
                        Ga naar
                    </Link>
                </Button>
                <Button size="sm" variant="outline" className="gap-1" asChild>
                    <Link href="/logbook/create">
                        <Plus className="size-3.5" />
                        Toevoegen
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}