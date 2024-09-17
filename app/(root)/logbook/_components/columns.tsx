"use client"

import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { Eye } from "lucide-react"
import Link from "next/link"
import { Logbook } from "../_data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Logbook>[] = [
    {
        id: "select",
        cell: ({ row }) => {
            const logbook = row.original

            return (
                <Link href={`/logbook/${logbook.id}`}>
                    <Eye className="size-4" />
                </Link>
            )
        }
    },
    {
        accessorKey: "monitor_id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Monitor" />
        ),
        cell: ({ row }) => {
            const monitor_name = row.original.monitor.monitor_name

            return (
                <span className="truncate font-medium">
                    {monitor_name}
                </span>
            )
        },
        enableHiding: false
    },
    {
        accessorKey: "site_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Locatie" />
        ),
        cell: ({ row }) => {
            const site_code = row.original.location.site_code

            return (
                <span>
                    {site_code}
                </span>
            )
        },
        enableHiding: false
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Titel" />
        ),
        cell: ({ row }) => (
            <span>
                {row.getValue("title")}
            </span>
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Datum" />
        ),
        cell: ({ row }) => {
            const date = row.original.date

            return (
                <span>
                    {format(date, "dd MMMM yyyy")}
                </span>
            )
        },
        enableSorting: false,
        enableHiding: false
    },
    {
        id: "actions",
        cell: ({ row }) => <div>
            <DataTableRowActions row={row} />
        </div>
    }

]