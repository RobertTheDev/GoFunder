import { z, object, string } from 'zod';

// Schema defines the fields required to delete a fundraiser.
export const deleteFundraiserSchema = object({
    confirm: string({
        invalid_type_error: 'Confirm must be of type string',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        required_error: "Please type 'confirm' to close your account"
    })
        .min(1, { message: "Please type 'confirm' to close your account" })
        .refine(value => value.toLowerCase() === 'confirm', {
            message: "Please type 'confirm' to close your account"
        })
});

// Infers the schema as a TypeScipt type.
export type DeleteFundraiserSchemaType = z.infer<typeof deleteFundraiserSchema>;
