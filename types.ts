import { Locations, Logbook, Monitors } from "@prisma/client";

export type MonitorWithLocation = Monitors & { location: Locations }

export type LocationWithMonitors = Locations & { monitors: Monitors }

export type LogbookWithLocationAndMonitor = Logbook & { location: Locations, monitor: Monitors }