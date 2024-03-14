import { z } from "zod";

// This schema defines fields required to reset a user's password.
export const resetPasswordSchema = z.object({
    // Password is required to be a string with a minimum of 8 characters and max of 64.
    // Password must have a special character, number and capital letter.
    password: z
        .string({
            invalid_type_error: "Password must be a string.",
            required_error: "Password is required",
        })
        .max(64, "Password must be no more than 64 characters long.")
        .min(8, "Password must be at least 8 characters long.")
        .refine((data: string) => /\d/.test(data), {
            message: "Password must contain at least one number.",
        })
        .refine((data: string) => /[A-Z]/.test(data), {
            message: "Password must contain at least one capital letter.",
        })
        .refine((data: string) => /[!@#$%^&*(),.?":{}|<>]/.test(data), {
            message: "Password must contain at least one special character.",
        }),
});

// Infers the schema as a TypeScript type.
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
