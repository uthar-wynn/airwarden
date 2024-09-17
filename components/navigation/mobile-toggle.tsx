import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { NavigationSidebar } from "./navigation-sidebar"

export const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex gap-0 w-20">
                <NavigationSidebar />
                <div className="w-20">
                </div>
            </SheetContent>
        </Sheet>
    )
}