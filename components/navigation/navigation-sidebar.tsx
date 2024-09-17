"use client"

import { UserButton } from "@clerk/nextjs"
import { Airplay, BookText, Home, MapPin } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { NavigationItem } from "./navigation-item"

export const NavigationSidebar = () => {
    const routes = [
        {
            label: "Home",
            href: "/dashboard",
            icon: Home
        },
        {
            label: "Stations",
            href: "/locations",
            icon: MapPin
        },
        {
            label: "Monitors",
            href: "/monitors",
            icon: Airplay
        },
        {
            label: "Logboek",
            href: "/logbook",
            icon: BookText
        }
    ]

    return (
        <div className="space-y-4 flex flex-col items-center h-full text-primary w-full py-3 dark:bg-secondary bg-secondary">
            <UserButton
                appearance={{
                    elements: {
                        avatarBox: "h-12 w-12"
                    }
                }}
            />
            <Separator className="h-0.5 bg-primary rounded-md w-10 mx-auto" />
            <ScrollArea className="flex-1 w-full">
                {routes.map((route, index) => (
                    <NavigationItem
                        key={index}
                        href={route.href}
                        label={route.label}
                        Icon={route.icon}
                    />
                ))}
            </ScrollArea>
            <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                <ModeToggle />
            </div>
        </div>
    )
}