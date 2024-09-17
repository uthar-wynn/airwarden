import { db } from "@/lib/db"

export const useDashboard = async () => {

    const locations = await db.locations.findMany()

    const monitors = await db.monitors.findMany()

    const logbooks = await db.logbook.findMany({
        orderBy: { created_at: "desc" },
        include: {
            location: true,
            monitor: true
        },
        take: 5
    })

    const auditlogs = await db.auditLog.findMany({
        orderBy: { created_at: "desc" },
        take: 5
    })

    return {
        locations,
        monitors,
        logbooks,
        auditlogs
    }
}