"use client"

import { z } from "zod";

const formSchema = z.object({
    site_code: z.string().length(4),
    address_1: z.optional(z.string()),
    zip_code: z.optional(z.string()),
    city: z.optional(z.string()),
    itinerary: z.optional(z.string()),
    access_procedure: z.optional(z.string()),
    comments: z.optional(z.string()),
    enabled: z.boolean()
})

const LocationsCreatePage = () => {
    return (
        <div>
            Create Locations
        </div>
    )
}

export default LocationsCreatePage;