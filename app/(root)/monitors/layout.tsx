
const MonitorLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="container relative">
            <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl mt-8">
                {children}
            </div>
        </div>
    )
}

export default MonitorLayout