import { currentUser } from "@clerk/nextjs/server"
import { ACTION, ENTITY_TYPE } from "@prisma/client"
import { db } from "./db"

interface Props {
    entity_id: string
    entity_type: ENTITY_TYPE
    entity_title: string
    action: ACTION
}

export const createAuditLog = async (props: Props) => {
    try {
        const user = await currentUser()

        if (!user) throw new Error("User not found!")

        const {
            entity_id,
            entity_type,
            entity_title,
            action
        } = props

        await db.auditLog.create({
            data: {
                entity_id,
                entity_type,
                entity_title,
                action,
                user_id: user.id,
                user_image: user.imageUrl,
                user_name: user.firstName + " " + user.lastName || user.username || "John Doe"
            }
        })
    } catch (error) {
        console.log("[AUDIT_LOG_ERROR]", error)
    }
}