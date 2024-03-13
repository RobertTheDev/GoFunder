import { z, object, string, boolean } from "zod";

// The schema defines the fields required to create a donation.
export const createDonationSchema = object({
    amount: z
        .number({
            invalid_type_error: "Amount must be of type number",
            required_error: "Amount is required",
        })
        .min(1, "Amount cannot be zero"),
    annonymous: boolean({
        invalid_type_error: "Annonymous must be of type boolean",
    }).optional(),
    message: string({
        invalid_type_error: "Message must be of type boolean",
    }).optional(),
    slug: z
        .string({
            invalid_type_error: "Fundraiser slug must be of type string",
            required_error: "Fundraiser slug is required",
        })
        .min(1, "Fundraiser slug is required"),
});

// Infers the schema as a TypeScipt type.
export type CreateDonationSchemaType = z.infer<typeof createDonationSchema>;
