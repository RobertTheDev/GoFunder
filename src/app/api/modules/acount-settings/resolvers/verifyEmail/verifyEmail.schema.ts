import { z, object, string } from "zod";

// Schema defines the fields required to verify a user's email.
export const verfyEmailSchema = object({
    emailVerificatonToken: string({
        invalid_type_error: "Email verification token must be of type string",
        required_error: "Email verification token is required",
    }).min(1, { message: "Email verification token is required" }),
});

// Infers the schema as a TypeScipt type.
export type VerifyEmailSchemaType = z.infer<typeof verfyEmailSchema>;
