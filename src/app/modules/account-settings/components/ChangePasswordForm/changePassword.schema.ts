import { z, object, string } from "zod";

// Schema defines the fields required to change a password.
export const changePasswordSchema = object({
    currentPassword: string({
        invalid_type_error: "Current password must be of type string",
        required_error: "Current password is required",
    }).min(1, {
        message: "Current password is required",
    }),
    newPassword: string({
        invalid_type_error: "New password must be of type string",
        required_error: "New password is required",
    })
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, {
            message: "Password must be no longer than 20 characters long",
        }),
});

// Infers the schema as a TypeScipt type.
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;
