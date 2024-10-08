"use client"

import { PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export const LocationAdd = () => {
    const router = useRouter()

    return (
        <button
            onClick={() => router.push("/locations/create")}
            className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
        >
            <PlusCircle className="size-4 text-zinc-500 dark:text-zinc-400" />
            <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
                Toevoegen
            </p>
        </button>
    )
}