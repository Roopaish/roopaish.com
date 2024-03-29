"use client"

import { useState } from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema } from "@/lib/validations/contact"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  })

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true)
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        toast.success(
          data?.message ?? "Email has been sent. I will soon get back to you."
        )
      })
      .catch((error) => {
        toast.error(error?.message ?? "Failed to send email.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Subject (Optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Type Your Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {isLoading && <Icons.spinner className="mr-2 h-6 w-6 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  )
}
