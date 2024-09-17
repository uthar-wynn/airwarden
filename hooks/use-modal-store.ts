import { Locations, Monitors } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createLocation" | "editLocation" | "createMonitor" | "editMonitor"

interface ModalData {
    location?: Locations
    monitor?: Monitors
}

interface ModalStore {
    type: ModalType | null
    data: ModalData
    isOpen: boolean
    onOpen: (type: ModalType, data?: ModalData) => void
    onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, isOpen: false })
}))