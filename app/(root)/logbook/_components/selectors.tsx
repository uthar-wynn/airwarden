"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLogbook } from "@/hooks/use-logbook-store"
import { Locations } from "@prisma/client"

interface Props {
    locations: Locations[]
}

export const Selectors = ({
    locations
}: Props) => {
    const { setLocation, monitors, setMonitor } = useLogbook()

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
                <Label htmlFor="title">Locatie</Label>
                <Select
                    onValueChange={(e) => setLocation(e)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Selecteer locatie" />
                    </SelectTrigger>
                    <SelectContent>
                        {locations.map((location) => (
                            <SelectItem value={location.id} key={location.id}>
                                {location.site_code}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col space-y-2">
                <Label htmlFor="title">Monitor</Label>
                {monitors?.length && (
                    <Select
                        onValueChange={(e) => setMonitor(e)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecteer monitor" />
                        </SelectTrigger>
                        <SelectContent>
                            {monitors.map((monitor) => (
                                <SelectItem value={monitor.id} key={monitor.id}>
                                    {monitor.monitor_name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                ) || (
                        <p>
                            Geen toestel(len) gevonden voor geselecteerde locatie
                        </p>
                    )}
            </div>
        </div>
    )
}