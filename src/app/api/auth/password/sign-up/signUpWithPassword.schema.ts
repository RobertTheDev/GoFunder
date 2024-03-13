import { z, object, string } from "zod";

// Schema defines the fields required to sign up a user with a password.
export const signUpWithPasswordSchema = object({
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
    password: string({
        invalid_type_error: "Password must be of type string",
        required_error: "Password is required",
    })
        .min(1, {
            message: "Password must be at least 8 characters long",
        })
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
        ),
});

// Infers the schema as a TypeScipt type.
export type SignUpWithPasswordSchemaType = z.infer<
    typeof signUpWithPasswordSchema
>;
