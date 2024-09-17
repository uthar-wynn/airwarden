import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 rounded-full uppercase bg-amber-100 text-amber-700">
          <Medal className="h-6 w-6 mr-2" />
          Leader in Log Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center mb-6">
          Take a breath with AirLog
        </h1>
        <div className="text-3xl md bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work smarter. Work Faster.
        </div>
      </div>
      <div className="text-sm md:text-xl mt-4 max-w-sm md:max-w-2xl text-center mx-auto">
        &lsquo;Monitoring air quality isn&lsquo;t just about numbers; it&lsquo;s about every breath we take.&rsquo; - Chat GPT
        <br />
        Empower your productivity, streamline workflow, and make every second count with AirLog.
      </div>
      <SignedIn>
        <Button asChild>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </Button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
      </SignedOut>
    </div>
  )
}
