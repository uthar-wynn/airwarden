import { createAuditLog } from "@/lib/create-audit-log"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { ACTION, ENTITY_TYPE } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        auth().protect()

        const locations = await db.locations.findMany({
            orderBy: { site_code: "asc" }
        })

        return NextResponse.json(locations)

    } catch (error) {
        console.log("[MONITORS_GET]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const { location_id, monitor_name, serial_number, type, make, model } = await req.json()

        auth().protect()

        const monitor = await db.monitors.create({
            data: {
                location_id,
                monitor_name,
                serial_number,
                type,
                make,
                model
            }
        })

        await createAuditLog({
            entity_title: monitor.monitor_name,
            entity_id: monitor.id,
            entity_type: ENTITY_TYPE.MONITOR,
            action: ACTION.CREATE
        })

        return NextResponse.json(monitor)

    } catch (error) {
        console.log("[MONITORS_POST]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}