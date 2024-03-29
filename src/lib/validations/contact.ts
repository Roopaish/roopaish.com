import * as z from "zod"

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string().optional(),
  body: z.string(),
})
