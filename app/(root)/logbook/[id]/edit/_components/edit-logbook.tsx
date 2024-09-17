"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Logbook } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

interface FormProps {
    logbook: Logbook
}

const formSchema = z.object({
    title: z.string().min(5),
    solution: z.optional(z.string())
})

export const EditLogbook = ({
    logbook
}: FormProps) => {
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            solution: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    useEffect(() => {
        if (logbook) {
            form.setValue("title", logbook.title)
            form.setValue("solution", logbook.solution || "")
        }
    }, [form, logbook])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/logbook/${logbook.id}`, values)
                .then(() => {
                    router.push(`/logbook/${logbook.id}`)
                })
                .catch(() => toast.error("Er is iets fout gelopen bij het toevoegen de log"))
        } catch (error) {
            console.log(error)
        }
    }

    return (
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
                                                disabled={isLoading}
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
                                                disabled={isLoading}
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
                                disabled={isLoading}
                            >
                                Opslaan
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}