import { z, object, string } from "zod";

// Schema defines the fields required to sign up a user.
export const signUpSchema = object({
    email: string({
        invalid_type_error: "Email must be of type string",
        required_error: "Email is required",
    })
        .email({ message: "Email must be in valid email format" })
        .min(1, { message: "Email is required" }),
    name: string({
        invalid_type_error: "Name must be of type string",
        required_error: "Name is required",
    }).min(1, {
        message: "Name is required",
    }),
});

// Infers the schema as a TypeScipt type.
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
