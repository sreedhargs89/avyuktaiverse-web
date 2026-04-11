import { z } from "zod";

/**
 * Contact form schema.
 * Used by the server action (`app/contact/action.ts`) to validate
 * submissions before hitting Resend. Length limits guard against
 * abuse and keep message payloads within Resend's body limits.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200, "Email is too long."),
  company: z
    .string()
    .trim()
    .max(160, "Company name is too long.")
    .optional()
    .transform((v) => v || ""),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more context (at least 20 characters).")
    .max(4000, "Message is too long (max 4000 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
