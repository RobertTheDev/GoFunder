import { z, object, string, boolean } from 'zod';

// The schema defines the fields required to create a donation.
export const createDonationSchema = object({
    amount: z
        .number({
            invalid_type_error: 'Amount must be of type number',
            required_error: 'Amount is required'
        })
        .min(1, 'Amount cannot be zero'),
    annonymous: boolean({
        invalid_type_error: 'Annonymous must be of type boolean'
    }).optional(),
    message: string({
        invalid_type_error: 'Message must be of type boolean',
        required_error: 'Message is required'
    }).min(1, 'Message is required')
});

// Infers the schema as a TypeScipt type.
export type CreateDonationSchemaType = z.infer<typeof createDonationSchema>;
