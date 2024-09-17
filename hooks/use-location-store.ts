"use client"

import { Locations } from "@prisma/client"
import axios from "axios"
import { useEffect } from "react"
import { create } from "zustand"

interface LocationState {
    locations: Locations[]
}

const useLocationStore = create<LocationState>((set) => ({
    locations: []
}))

export const useLocation = () => {
    const { locations } = useLocationStore()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/locations")
            useLocationStore.setState({ locations: response.data })
        }

        fetchData()
    }, [])

    return {
        locations
    }
}