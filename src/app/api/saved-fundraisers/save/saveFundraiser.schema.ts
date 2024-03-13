import { z, object, string } from "zod";

// Schema defines the fields required to save a fundraiser.
export const saveFundraiserSchema = object({
    fundraiserId: string({
        invalid_type_error: "Fundraiser ID must be of type string",
        required_error: "Fundraiser ID is required",
    }).min(1, { message: "Fundraiser ID is required" }),
});

// Infers the schema as a TypeScipt type.
export type SaveFundraiserSchemaType = z.infer<typeof saveFundraiserSchema>;
