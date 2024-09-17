"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLogbook } from "@/hooks/use-logbook-store"
import { zodResolver } from "@hookform/resolvers/zod"
import { Locations } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Selectors } from "../../_components/selectors"

interface FormProps {
    locations: Locations[]
}

const formSchema = z.object({
    location_id: z.string(),
    monitor_id: z.string(),
    title: z.string().min(5),
    solution: z.optional(z.string())
})

export const AddLogbook = ({
    locations
}: FormProps) => {
    const router = useRouter()
    const { enabled, selectedLocation, selectedMonitor } = useLogbook()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location_id: "",
            monitor_id: "",
            title: "",
            solution: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    useEffect(() => {
        if (selectedLocation) form.setValue("location_id", selectedLocation)
    }, [form, selectedLocation])

    useEffect(() => {
        if (selectedMonitor) form.setValue("monitor_id", selectedMonitor)
    }, [form, selectedMonitor])


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post("/api/logbook", values)
                .then(() => {
                    router.push("/logbook")
                })
                .catch(() => toast.error("Er is iets fout gelopen bij het toevoegen de log"))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="grid lg:grid-cols-4 gap-4">
                <div className="lg:col-span-3">
                    <div className="mt-3 space-y-2 px-3">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="space-y-8 px-6">
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Titel
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Titel"
                                                        disabled={!enabled || isLoading}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="solution"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Oplossing
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Vul de beschrijving of oplossing in"
                                                        className="flex-1 lg:min-h-80"
                                                        disabled={!enabled || isLoading}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <Button
                                        disabled={!enabled}
                                    >
                                        Opslaan
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
                <div className="mt-3 space-y-2 px-3">
                    <Selectors locations={locations} />
                </div>
            </div>
        </div>
    )
}