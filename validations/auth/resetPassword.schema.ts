import { z, object, string } from 'zod';

// Schema defines the fields required to reset a password.
export const resetPasswordSchema = object({
    password: z
        .string({
            invalid_type_error: 'Password must be of type string',
            required_error: 'Password must be at least 8 characters long'
        })
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(20, {
            message: 'Password must be no longer than 20 characters long'
        }),
    confirmPassword: string({
        invalid_type_error: 'Confirm password must be of type string',
        required_error: 'Confirm password is required'
    }).min(1, {
        message: 'Confirm password is required'
    })
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});

// Infers the schema as a TypeScipt type.
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;
