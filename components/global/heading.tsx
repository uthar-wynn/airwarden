"use client"

interface HeadingProps {
    title: string
    subtitle?: string
    center?: boolean
}

export const Heading = ({
    title,
    subtitle,
    center
}: HeadingProps) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light mt-2">
                {subtitle}
            </div>
        </div>
    )
}