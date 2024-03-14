import { z, object, string } from "zod";

// The schema defines the fields required to create a donation.
export const createDonationSchema = object({
    amount: z
        .number({
            invalid_type_error: "Amount must be of type number",
            required_error: "Amount is required",
        })
        .min(1, "Amount cannot be zero"),

    message: string({
        invalid_type_error: "Message must be of type boolean",
    }).optional(),
});

// Infers the schema as a TypeScipt type.
export type CreateDonationSchemaType = z.infer<typeof createDonationSchema>;
