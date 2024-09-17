import { z } from "zod"

export const monitorSchema = z.object({
    id: z.string(),
    location_id: z.string(),
    monitor_name: z.string(),
    serial_number: z.nullable(z.string()),
    type: z.nullable(z.string()),
    make: z.nullable(z.string()),
    model: z.nullable(z.string()),
    location: z.object({
        site_code: z.string()
    })
})

export type Monitor = z.infer<typeof monitorSchema>