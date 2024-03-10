import { z, object, string, number } from "zod";

// Schema defines the fields required to update a fundraiser.
export const updateFundraiserSchema = object({
    category: string({
        invalid_type_error: "Category must be of type string",
    })
        .min(1, "Category cannot be empty")
        .optional(),
    deadlineDate: string({
        invalid_type_error: "Deadline date must be of type string",
    })
        .datetime({ message: "Deadline date must be a valid date format" })
        .optional(),
    description: string({
        invalid_type_error: "Description must be of type string",
    })
        .min(1, "Description cannot be empty")
        .optional(),
    headline: string({
        invalid_type_error: "Headline must be of type string",
    })
        .min(1, "Headline cannot be empty")
        .optional(),
    image: string({
        invalid_type_error: "Image must be of type string",
    })
        .url("Image must a valid URL")
        .min(1, "Image is required")
        .optional(),
    name: string({
        invalid_type_error: "Name must be of type string",
    })
        .min(1, "Name cannot be empty")
        .optional(),
    target: number({
        invalid_type_error: "Target must be of type number",
    })
        .min(1, "Target cannot be 0")
        .optional(),
});

// Infers the schema as a TypeScipt type.
export type UpdateFundraiserSchemaType = z.infer<typeof updateFundraiserSchema>;
