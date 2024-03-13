import { z, object, string } from "zod";

// Schema defines the fields required to sign in a user with a password.
export const signInWithPasswordSchema = object({
    email: string({
        invalid_type_error: "Email must be of type string",
        required_error: "Email is required",
    })
        .email({ message: "Email must be in valid email format" })
        .min(1, { message: "Email is required" }),
    password: string({
        invalid_type_error: "Password must be of type string",
        required_error: "Password is required",
    }).min(1, {
        message: "Password is required",
    }),
});

// Infers the schema as a TypeScipt type.
export type SignInWithPasswordSchemaType = z.infer<
    typeof signInWithPasswordSchema
>;
