import { z } from "zod"

export const locationSchema = z.object({
    id: z.string(),
    site_code: z.string(),
    address_1: z.nullable(z.string()),
    zip_code: z.nullable(z.string()),
    city: z.nullable(z.string()),
    itinerary: z.nullable(z.string()),
    access_procedure: z.nullable(z.string()),
    comments: z.nullable(z.string()),
    enabled: z.boolean()
})

export type Location = z.infer<typeof locationSchema>