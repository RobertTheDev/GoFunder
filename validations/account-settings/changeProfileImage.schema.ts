import { z, object, string } from 'zod';

// This schema defines fields required to update a user's profile.
export const updateProfileImageSchema = object({
    image: string({
        invalid_type_error: 'Image must be of type string'
    })
        .min(1, 'Image cannot be empty')
        .url('Image must be a valid URL')
        .optional()
});

// Infers the schema as a TypeScript type.
export type UpdateProfileImageSchemaType = z.infer<
    typeof updateProfileImageSchema
>;
