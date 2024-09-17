import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { LocationAdd } from "./location-add"
import { LocationSearch } from "./location-search"

export const LocationSidebar = () => {
    return (
        <div className="flex flex-col h-full text-primary w-full mt-14 bg-primary-foreground">
            <ScrollArea className="flex-1 px-3">
                <div className="mt-2">
                    <LocationSearch />
                </div>
                <Separator className="rounded-md my-2" />
                <div className="mb-2">
                    <LocationAdd />
                </div>
            </ScrollArea>
        </div>
    )
}