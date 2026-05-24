import { z } from "zod"

export const OPERATION_TYPES = [
  { value: "residential", label: "Residential care home" },
  { value: "nursing", label: "Nursing home" },
  { value: "home-care", label: "Home care agency" },
  { value: "supported-living", label: "Supported living" },
  { value: "care-group", label: "Care group" },
  { value: "other", label: "Other" },
] as const

export type OperationType = (typeof OPERATION_TYPES)[number]["value"]

export const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company or organisation name"),
  role: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  operationType: z.enum(
    OPERATION_TYPES.map((o) => o.value) as [OperationType, ...OperationType[]],
    { error: "Please select your operation type" }
  ),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be 2,000 characters or fewer"),
  _trap: z.string().max(0).optional(),
  _loadedAt: z.string().optional(),
})

export type ContactInput = z.infer<typeof ContactSchema>

export type ContactFormState = {
  status: "idle" | "success" | "error"
  errors?: Partial<Record<keyof ContactInput | "_form", string[]>>
  message?: string
}
