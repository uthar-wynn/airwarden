"use client"

import { Monitors } from "@prisma/client"
import axios from "axios"
import { useEffect } from "react"
import { create } from "zustand"

interface LogbookState {
    selectedLocation: string
    setLocation: (location: string) => void
    selectedMonitor: string
    setMonitor: (monitor: string) => void
    monitors: Monitors[] | null
    enabled: boolean
}

const useLocationStore = create<LogbookState>((set) => ({
    selectedLocation: "",
    setLocation: (location) => {
        set({ selectedLocation: location })
        set({ selectedMonitor: "" })
        set((state) => ({ enabled: !!state.selectedLocation && !!state.selectedMonitor }))
    },
    selectedMonitor: "",
    setMonitor: (monitor) => {
        set({ selectedMonitor: monitor })
        set((state) => ({ enabled: !!state.selectedLocation && !!state.selectedMonitor }))
    },
    monitors: [],
    enabled: false
}))

export const useLogbook = () => {
    const { selectedLocation, setLocation, selectedMonitor, setMonitor, monitors, enabled } = useLocationStore()

    useEffect(() => {
        if (selectedLocation) {
            const fetchData = async () => {
                const response = await axios.get(`/api/locations/${selectedLocation}`)
                // console.log("Logbook store", response)
                useLocationStore.setState({ monitors: response.data.monitors })
            }

            fetchData()
        }
    }, [selectedLocation])

    return {
        monitors,
        setLocation,
        setMonitor,
        enabled,
        selectedLocation,
        selectedMonitor
    }
}