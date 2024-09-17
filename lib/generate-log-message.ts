import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
    const { action, entity_title, entity_type } = log

    switch (action) {
        case ACTION.CREATE:
            return `created ${entity_type.toLocaleLowerCase()} "${entity_title}"`
        case ACTION.UPDATE:
            return `updated ${entity_type.toLocaleLowerCase()} "${entity_title}"`
        case ACTION.DELETE:
            return `deleted ${entity_type.toLocaleLowerCase()} "${entity_title}"`
        default:
            return `unknown action ${entity_type.toLocaleLowerCase()} "${entity_title}"`
    }
}