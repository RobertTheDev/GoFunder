import { z, object, string, number } from 'zod';

// Schema defines the fields required to create a fundraiser.
export const createFundraiserSchema = object({
    category: string({
        invalid_type_error: 'Category must be of type string',
        required_error: 'Category is required'
    }).min(1, 'Category is required'),
    deadlineDate: string({
        invalid_type_error: 'Deadline date must be of type string'
    }).optional(),
    description: string({
        invalid_type_error: 'Description must be of type string',
        required_error: 'Description is required'
    }).min(1, 'Description is required'),
    image: string({
        invalid_type_error: 'Image must be of type string',
        required_error: 'Image is required'
    })
        .url('Image must a valid URL')
        .min(1, 'Image is required'),
    name: string({
        invalid_type_error: 'Name must be of type string',
        required_error: 'Name is required'
    }).min(1, 'Name is required'),
    target: number({
        invalid_type_error: 'Target must be of type number',
        required_error: 'Target is required'
    }).min(1, 'Target cannot be 0')
});

// Infers the schema as a TypeScipt type.
export type CreateFundraiserSchemaType = z.infer<typeof createFundraiserSchema>;
