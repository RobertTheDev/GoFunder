import { z } from "zod";

// This schema defines fields required to send a password reset email.
export const sendPasswordResetSchema = z.object({
    // Email is required to be a string in valid email format with a minimum of 3 characters.
    email: z
        .string({
            invalid_type_error: "Email must be a string.",
            required_error: "Email is required",
        })
        .email("Email must be in valid email format.")
        .min(3, "Email must be at least 3 characters long."),
});

// Infers the schema as a TypeScript type.
export type SendPasswordResetSchemaType = z.infer<
    typeof sendPasswordResetSchema
>;
