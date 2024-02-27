import * as z from 'zod';

// Schema defines the fields required sign in schema.
export const signInSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, { message: 'Password is too short' })
        .max(20, { message: 'Password is too long' })
});

// Infers the schema as TypeScipt type.
export type SignInSchemaType = z.infer<typeof signInSchema>;
