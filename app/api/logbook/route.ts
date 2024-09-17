import { createAuditLog } from "@/lib/create-audit-log"
import { db } from "@/lib/db"
import { auth, currentUser } from "@clerk/nextjs/server"
import { ACTION, ENTITY_TYPE } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { location_id, monitor_id, title, solution } = await req.json()

        auth().protect()

        const user = await currentUser()

        const logbook = await db.logbook.create({
            data: {
                date: new Date(),
                location_id,
                monitor_id,
                user_name: user?.firstName + " " + user?.lastName || user?.username || "John Doe",
                title,
                solution
            }
        })

        await createAuditLog({
            entity_title: logbook.title,
            entity_id: logbook.id,
            entity_type: ENTITY_TYPE.LOG,
            action: ACTION.CREATE
        })

        return NextResponse.json(logbook)

    } catch (error) {
        console.log("[LOGBOOK_POST]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}