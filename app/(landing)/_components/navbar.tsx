import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Image
                    width="150"
                    height="56"
                    src="/logo.svg"
                    alt="Logo"
                />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <SignedIn>
                        <Button asChild>
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </Button>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" />
                        <SignUpButton mode="modal" />
                    </SignedOut>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}