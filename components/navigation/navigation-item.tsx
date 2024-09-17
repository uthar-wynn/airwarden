import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface NavigationItemProps {
    href: string
    label: string
    Icon: LucideIcon
}

export const NavigationItem = ({
    href,
    label,
    Icon
}: NavigationItemProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const onNavigate = (url: string) => {
        return router.push(url)
    }

    return (
        <div
            onClick={() => onNavigate(href)}
            className={
                cn(
                    "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                    pathname === href && "bg-primary/10 text-primary"
                )
            }
        >
            <div className="flex flex-col gap-y-2 items-center flex-1">
                <Icon size={25} />
                {label}
            </div>
        </div>
    )
}