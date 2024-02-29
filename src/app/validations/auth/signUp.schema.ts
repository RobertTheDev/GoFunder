import { z, object, string } from 'zod';

// Schema defines the fields required to sign up a user.
export const signUpSchema = object({
    email: string({
        invalid_type_error: 'Email must be of type string',
        required_error: 'Email is required'
    })
        .email({ message: 'Email must be in valid email format' })
        .min(1, { message: 'Email is required' }),
    password: z
        .string({
            invalid_type_error: 'Password must be of type string',
            required_error: 'Password must be at least 8 characters long'
        })
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(20, {
            message: 'Password must be no longer than 20 characters long'
        }),
    name: string({
        invalid_type_error: 'Name must be of type string',
        required_error: 'Name is required'
    }).min(1, {
        message: 'Name is required'
    })
});

// Infers the schema as a TypeScipt type.
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
