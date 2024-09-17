"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CircleCheck, CircleMinus, Eye } from "lucide-react"
import Link from "next/link"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Location } from "./schema"


export const columns: ColumnDef<Location>[] = [
    {
        id: "select",
        cell: ({ row }) => {
            const location_id = row.original.id

            return (
                <Link href={`/locations/${location_id}`}>
                    <Eye className="size-4" />
                </Link>
            )
        },
        enableHiding: false,
        enableSorting: false
    },
    {
        accessorKey: "site_code",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Naam" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("site_code")}
            </span>
        )
    },
    {
        accessorKey: "address_1",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Straat" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("address_1")}
            </span>
        )
    },
    {
        accessorKey: "zip_code",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Postcode" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("zip_code")}
            </span>
        )
    },
    {
        accessorKey: "city",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Gemeente" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("city")}
            </span>
        )
    },
    {
        accessorKey: "enabled",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Actief" />
        ),
        cell: ({ row }) => (
            row.getValue("enabled") ? (
                <div className="flex w-[100px] items-center">
                    <CircleCheck className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                        Actief
                    </span>
                </div>
            ) : (
                <div className="flex w-[100px] items-center">
                    <CircleMinus className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                        Niet actief
                    </span>
                </div>
            )
        )
    },
    {
        id: "actions",
        cell: ({ row }) => <div>
            <DataTableRowActions row={row} />
        </div>
    }

]