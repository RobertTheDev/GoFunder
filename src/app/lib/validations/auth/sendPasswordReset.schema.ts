import { z, object, string } from 'zod';

// Schema defines the fields required to send a password reset.
export const sendPasswordResetSchema = object({
    email: string({
        invalid_type_error: 'Email must be of type string',
        required_error: 'Email is required'
    })
        .email({ message: 'Email must be in valid email format' })
        .min(1, { message: 'Email is required' })
});

// Infers the schema as a TypeScipt type.
export type SendPasswordResetSchemaType = z.infer<
    typeof sendPasswordResetSchema
>;
