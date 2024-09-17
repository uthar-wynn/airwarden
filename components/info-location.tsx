import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Locations } from "@prisma/client"

interface InfoLocationProps {
    location: Locations
}

export const InfoLocation = ({
    location
}: InfoLocationProps) => {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start bg-muted/50">
                <CardTitle className="group flex items-center gap-2 text-lg">
                    {location.site_code}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                    <div className="font-semibold">
                        Details
                    </div>
                    <dl className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Naam</dt>
                            <dd>
                                {location.site_code}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Straat</dt>
                            <dd>
                                {location.address_1}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Postcode</dt>
                            <dd>
                                {location.zip_code}
                            </dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Gemeente</dt>
                            <dd>
                                {location.city}
                            </dd>
                        </div>
                    </dl>
                </div>
            </CardContent>
        </Card>
    )
}