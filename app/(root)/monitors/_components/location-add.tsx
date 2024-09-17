"use client"

import { useModal } from "@/hooks/use-modal-store"
import { PlusCircle } from "lucide-react"

export const LocationAdd = () => {
    const { onOpen } = useModal()

    return (
        <button
            onClick={() => onOpen("createLocation")}
            className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
        >
            <PlusCircle className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
                Toevoegen
            </p>
        </button>
    )
}