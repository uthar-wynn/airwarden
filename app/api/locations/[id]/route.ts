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

        if (!params.id) return new NextResponse("Location Id is required", { status: 400 })

        const location = await db.locations.findUnique({
            where: {
                id: params.id
            },
            include: {
                monitors: true
            }
        })

        return NextResponse.json(location)

    } catch (error) {
        console.log("[LOCATIONS_ID_GET]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        auth().protect()

        if (!params.id) return new NextResponse("Location Id is required", { status: 400 })

        const location = await db.locations.delete({
            where: {
                id: params.id
            }
        })

        await createAuditLog({
            entity_title: location.site_code,
            entity_id: location.id,
            entity_type: ENTITY_TYPE.LOCATION,
            action: ACTION.DELETE
        })

        return NextResponse.json(location)

    } catch (error) {
        console.log("[LOCATIONS_ID_DELETE]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { site_code, address_1, zip_code, city, state, itinerary, access_procedure, comments, enabled } = await req.json()

        auth().protect()

        if (!params.id) return new NextResponse("Location Id is required", { status: 400 })

        const location = await db.locations.update({
            where: {
                id: params.id
            },
            data: {
                site_code,
                address_1,
                zip_code,
                city,
                itinerary,
                access_procedure,
                comments,
                enabled
            }
        })

        await createAuditLog({
            entity_title: location.site_code,
            entity_id: location.id,
            entity_type: ENTITY_TYPE.LOCATION,
            action: ACTION.UPDATE
        })

        return NextResponse.json(location)

    } catch (error) {
        console.log("[LOCATIONS_ID_PATCH]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}