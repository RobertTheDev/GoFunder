import { z, object, string } from 'zod';

// Schema defines the fields required to sign in a user.
export const signInSchema = object({
    email: string({
        invalid_type_error: 'Email must be of type string',
        required_error: 'Email is required'
    })
        .email({ message: 'Email must be in valid email format' })
        .min(1, { message: 'Email is required' }),
    password: string({
        invalid_type_error: 'Password must be of type string',
        required_error: 'Password must be at least 8 characters long'
    })
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(20, {
            message: 'Password must be no longer than 20 characters long'
        })
});

// Infers the schema as a TypeScipt type.
export type SignInSchemaType = z.infer<typeof signInSchema>;
