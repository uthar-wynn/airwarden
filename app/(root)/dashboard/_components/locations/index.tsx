import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Locations } from "@prisma/client"
import { ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"
import { GraphLocation } from "./graph-location"

interface LocationsCardProps {
    locations: Locations[]
}

export const LocationsCard = ({
    locations
}: LocationsCardProps) => {
    return (
        <Card className="lg:max-w-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Locaties
                </CardTitle>
                <MapPin className="size-4" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {locations.length}
                </div>
            </CardContent>
            <CardContent className="flex-1">
                <GraphLocation
                    locations={locations}
                />
            </CardContent>
            <CardFooter>
                <Button size="sm" variant="ghost" className="gap-1" asChild>
                    <Link href="/locations">
                        <ArrowLeft className="size-3.5" />
                        Ga naar
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}