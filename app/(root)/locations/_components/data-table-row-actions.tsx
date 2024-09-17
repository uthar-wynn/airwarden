"use client"

import { ConfirmModal } from "@/components/modals/confirm-modal"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useModal } from "@/hooks/use-modal-store"
import { Locations } from "@prisma/client"
import { Row } from "@tanstack/react-table"
import axios from "axios"
import { Ellipsis, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { locationSchema } from "./schema"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row
}: DataTableRowActionsProps<TData>) {
    const location = locationSchema.parse(row.original)
    const { onOpen } = useModal()

    const onAction = async (e: React.MouseEvent) => {
        e.stopPropagation()
        const response = await axios.get(`/api/locations/${location.id}`)
        const newLocation = response.data as Locations
        onOpen("editLocation", { location: newLocation })
    }

    const onRemove = async () => {
        try {
            await axios.delete(`/api/locations/${location.id}`)
                .then(() => {
                    toast.success("Locatie is met succes verwijderd!")
                })
                .catch(() => toast.error("Er is iets fout gelopen bij het verwijderen van deze locatie"))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-4 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <Ellipsis className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={(e) => onAction(e)}>
                    <div className="flex items-center">
                        <Pencil className="size-4 mr-2" />
                        Bewerken
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ConfirmModal onConfirm={onRemove}>
                        <div className="flex items-center">
                            <Trash2 className="size-4 mr-2" />
                            Verwijderen
                        </div>
                    </ConfirmModal>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}