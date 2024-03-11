import { z, object, string, boolean } from "zod";

// The schema defines the fields required to update a donation.
export const updateDonationSchema = object({
    amount: z
        .number({
            invalid_type_error: "Amount must be of type number",
        })
        .min(1, "Amount cannot be zero")
        .optional(),
    annonymous: boolean({
        invalid_type_error: "Annonymous must be of type boolean",
    }).optional(),
    message: string({
        invalid_type_error: "Message must be of type boolean",
    })
        .min(1, "Message cannot be empty")
        .optional(),
});

// Infers the schema as a TypeScipt type.
export type UpdateDonationSchemaType = z.infer<typeof updateDonationSchema>;
