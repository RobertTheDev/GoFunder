import { z, object, boolean, string } from "zod";

// This schema defines fields required to update a user's profile.
export const updateProfileSchema = object({
    annonymous: boolean({
        invalid_type_error: "Annonymous must be of type boolean",
    }).optional(),
    name: string({
        invalid_type_error: "Name must be of type string",
    })
        .min(1, "Name cannot be empty")
        .optional(),
});

// Infers the schema as a TypeScipt type.
export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;
