import { z } from "zod"

export const logbookSchema = z.object({
    id: z.string(),
    location_id: z.string(),
    monitor_id: z.string(),
    date: z.date(),
    title: z.string().min(5),
    solution: z.nullable(z.string()),
    location: z.object({
        site_code: z.string()
    }),
    monitor: z.object({
        monitor_name: z.string()
    }),
})

export type Logbook = z.infer<typeof logbookSchema>