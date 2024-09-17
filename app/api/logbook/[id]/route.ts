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

        if (!params.id) return new NextResponse("Logbook Id is required", { status: 400 })

        const logbook = await db.logbook.findUnique({
            where: {
                id: params.id
            }
        })

        return NextResponse.json(logbook)

    } catch (error) {
        console.log("[LOGBOOK_ID_GET]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        auth().protect()

        if (!params.id) return new NextResponse("Logbook Id is required", { status: 400 })

        const logbook = await db.logbook.delete({
            where: {
                id: params.id
            }
        })

        await createAuditLog({
            entity_title: logbook.title,
            entity_id: logbook.id,
            entity_type: ENTITY_TYPE.LOG,
            action: ACTION.DELETE
        })

        return NextResponse.json(logbook)

    } catch (error) {
        console.log("[LOGBOOK_ID_DELETE]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { title, solution } = await req.json()

        auth().protect()

        if (!params.id) return new NextResponse("Logbook Id is required", { status: 400 })

        const logbook = await db.logbook.update({
            where: {
                id: params.id
            },
            data: {
                title,
                solution
            }
        })

        await createAuditLog({
            entity_title: logbook.title,
            entity_id: logbook.id,
            entity_type: ENTITY_TYPE.LOG,
            action: ACTION.UPDATE
        })

        return NextResponse.json(logbook)

    } catch (error) {
        console.log("[LOGBOOK_ID_PATCH]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}