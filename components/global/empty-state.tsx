"use client"

import { Heading } from "./heading"

interface EmptyStateProps {
    title?: string
    subtitle?: string
}

export const EmptyState = ({
    title = "Geen match gevonden",
    subtitle = "Wijzig of verwijder een van je filters"
}: EmptyStateProps) => {

    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4"></div>
        </div>
    )
}