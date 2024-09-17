"use client"

import { Eye } from "lucide-react"
import Link from "next/link"

interface RowActionProps {
    id: string
}

export const RowAction = ({
    id
}: RowActionProps) => {
    return (
        <Link href={`/logbook/${id}`}>
            <Eye className="size-4" />
        </Link>
    )
}