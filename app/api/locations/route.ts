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
        console.log("[LOCATIONS_GET]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const { site_code, address_1, zip_code, city, state, itinerary, access_procedure, comments, enabled } = await req.json()

        auth().protect()

        const location = await db.locations.create({
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
            action: ACTION.CREATE
        })

        return NextResponse.json(location)

    } catch (error) {
        console.log("[LOCATIONS_ID_POST]", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}