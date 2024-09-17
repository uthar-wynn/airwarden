"use client"

import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import Link from "next/link"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Monitor } from "./schema"


export const columns: ColumnDef<Monitor>[] = [
    {
        id: "select",
        cell: ({ row }) => {
            const monitor_id = row.original.id

            return (
                <Link href={`/monitors/${monitor_id}`}>
                    <Eye className="size-4" />
                </Link>
            )
        },
        enableHiding: false,
        enableSorting: false
    },
    {
        accessorKey: "monitor_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Monitor" />
        ),
        cell: ({ row }) => {
            const site_code = row.original.location.site_code

            return (
                <div className="flex space-x-2">
                    <Badge variant="outline">
                        {site_code}
                    </Badge>
                    <span className="max-w-96 truncate font-medium">
                        {row.getValue("monitor_name")}
                    </span>
                </div>
            )
        },
        enableHiding: false
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("type")}
            </span>
        )
    },
    {
        accessorKey: "make",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Fabrikant" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("make")}
            </span>
        )
    },
    {
        accessorKey: "model",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Model" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("model")}
            </span>
        ),
        enableHiding: false
    },
    {
        id: "actions",
        cell: ({ row }) => <div>
            <DataTableRowActions row={row} />
        </div>
    }

]