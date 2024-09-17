import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitors } from "@prisma/client"
import { Airplay, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface MonitorsCardProps {
    monitors: Monitors[]
}

export const MonitorsCard = ({
    monitors
}: MonitorsCardProps) => {
    return (
        <Card className="lg:max-w-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Monitoren
                </CardTitle>
                <Airplay className="size-4" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {monitors.length}
                </div>
            </CardContent>
            <CardFooter>
                <Button size="sm" variant="ghost" className="gap-1" asChild>
                    <Link href="/monitors">
                        <ArrowLeft className="size-3.5" />
                        Ga naar
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}