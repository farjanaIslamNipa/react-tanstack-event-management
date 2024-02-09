import {z} from "zod"

export const ServiceSchema = z.object({
  title: z.string().min(1, {message: 'This field is required'}),
  description: z.string().min(1, {message: 'This field is required'}),
  img: z.string().optional(),
  facilities: z.array(z.string()).optional(),
})

export const EventSchema = z.object({
  title: z.string().min(1, {message: 'This field is required'}),
  bgColor: z.string().optional(),
  img: z.string().optional()
})

export type TEventFormData = z.infer<typeof EventSchema>

export const RecentEventSchema = z.object({
  title: z.string().min(1, {message: 'This field is required'}),
  owner: z.string().min(1, {message: 'This field is required'}),
  img: z.string().optional()
})

export type TRecentEventFormData = z.infer<typeof RecentEventSchema>