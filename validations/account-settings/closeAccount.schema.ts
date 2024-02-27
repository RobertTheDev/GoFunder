import { z, object, string } from 'zod';

// Schema defines the fields required to close an account.
export const closeAccountSchema = object({
    confirm: string({
        invalid_type_error: 'Confirm must be of type string',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        required_error: "Please type 'confirm' to close your account"
    })
        .min(1, { message: "Please type 'confirm' to close your account" })
        .refine(value => value.toLowerCase() === 'confirm', {
            message: "Please type 'confirm' to close your account"
        }),
    password: string({
        invalid_type_error: 'Password must be of type string',
        required_error: 'Password is required'
    }).min(1, { message: 'Password is required' })
});

// Infers the schema as a TypeScipt type.
export type CloseAccountSchemaType = z.infer<typeof closeAccountSchema>;
