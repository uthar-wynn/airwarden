"use client"

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Locations } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface EditLocationProps {
    location: Locations
}

const formSchema = z.object({
    site_code: z.string().min(4),
    address_1: z.optional(z.string()),
    zip_code: z.optional(z.string()),
    city: z.optional(z.string()),
    itinerary: z.optional(z.string()),
    access_procedure: z.optional(z.string()),
    comments: z.optional(z.string()),
    enabled: z.boolean()
})

export const EditLocation = ({
    location
}: EditLocationProps) => {
    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            site_code: "",
            address_1: "",
            zip_code: "",
            city: "",
            itinerary: "",
            access_procedure: "",
            comments: "",
            enabled: true
        }
    })

    const isLoading = form.formState.isSubmitting

    useEffect(() => {
        if (location) {
            form.setValue("site_code", location.site_code)
            form.setValue("address_1", location.address_1 || "")
            form.setValue("zip_code", location.zip_code || "")
            form.setValue("city", location.city || "")
            form.setValue("itinerary", location.itinerary || "")
            form.setValue("access_procedure", location.access_procedure || "")
            form.setValue("comments", location.comments || "")
            form.setValue("enabled", location.enabled)
        }
    }, [form, location])

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/locations/${location?.id}`, values)
                .then(() => {
                    toast.success("Succes")
                    router.push("/locations")
                })
                .catch(() => toast.error("Er is iets fout gelopen!"))
        } catch (error) {
            console.log(error)
            toast.error("Er is een overwachte fout gebeurd!")
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid lg:grid-cols-2 gap-4"
            >
                <div className="space-y-8 px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="site_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                        Naam
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Naam"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="enabled"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-start space-x-3 space-y-0 p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Actief
                                        </FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="address_1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                    Adres
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder="Adres"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="zip_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                        Postcode
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Postcode"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                        Gemeente
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isLoading}
                                            placeholder="Gemeente"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="space-y-8 px-6">
                    <FormField
                        control={form.control}
                        name="itinerary"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                    Wegbeschrijving
                                </FormLabel>
                                <FormControl>
                                    <Textarea
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
                        name="access_procedure"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                    Toegangs procedure
                                </FormLabel>
                                <FormControl>
                                    <Textarea
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
                        name="comments"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                                    Opmerkingen
                                </FormLabel>
                                <FormControl>
                                    <Textarea
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
                    <Button disabled={isLoading}>
                        Opslaan
                    </Button>
                </div>
            </form>
        </Form>
    )
}