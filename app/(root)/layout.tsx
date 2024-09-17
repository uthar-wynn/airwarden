import { MobileToggle } from "@/components/navigation/mobile-toggle";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import Image from "next/image";

const RootLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-20 z-30 flex-col fixed inset-y-0">
                <NavigationSidebar />
            </div>
            <main className="h-full md:pl-20">
                <nav className="top-0 px-4 w-full h-14 border-b shadow-sm flex items-center">
                    <MobileToggle />
                    <div className="flex items-center gap-x-4">
                        <Image
                            width="150"
                            height="56"
                            src="/logo.svg"
                            alt="Logo"
                        />
                    </div>
                </nav>
                {children}
            </main>
        </div>
    )
}

export default RootLayout;