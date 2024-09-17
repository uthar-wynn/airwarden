"use client"

import { CreateLocationModal } from "@/components/modals/location/create-location-modal"
import { EditLocationModal } from "@/components/modals/location/edit-location-modal"
import { CreateMonitorModal } from "@/components/modals/monitor/create-monitor-modal"
import { EditMonitorModal } from "@/components/modals/monitor/edit-monitor-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <CreateLocationModal />
            <EditLocationModal />
            <CreateMonitorModal />
            <EditMonitorModal />
        </>
    )
}