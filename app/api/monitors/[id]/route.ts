import { createAuditLog } from "@/lib/create-audit-log"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { ACTION, ENTITY_TYPE } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        auth().protect()

        if (!params.id) return new NextResponse("Monitor Id is required", { status: 400 })

        const monitor = await db.monitors.findUnique({
            where: {
                id: params.id
            }
        })

        return NextResponse.json(monitor)

    } catch (error) {
        console.log("[MONITORS_ID_GET]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        auth().protect()

        if (!params.id) return new NextResponse("Monitor Id is required", { status: 400 })

        const monitor = await db.monitors.delete({
            where: {
                id: params.id
            }
        })

        return NextResponse.json(monitor)

    } catch (error) {
        console.log("[MONITORS_ID_GET]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { location_id, monitor_name, serial_number, type, make, model } = await req.json()

        auth().protect()

        if (!params.id) return new NextResponse("ID is required", { status: 400 })

        const monitor = await db.monitors.update({
            where: {
                id: params.id
            },
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
            action: ACTION.UPDATE
        })

        return NextResponse.json(monitor)

    } catch (error) {
        console.log("[LOCATIONS_PATCH]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}