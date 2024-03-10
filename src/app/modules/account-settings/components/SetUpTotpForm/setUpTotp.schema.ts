import { z, object, string } from "zod";

// This schema defines fields required to set up a user with a TOTP authenticator app.
export const setUpTotpCodeSchema = object({
    mfaSecret: string({
        invalid_type_error: "MFA secret must be a string",
        required_error: "MFA secret is required",
    }).min(1, "MFA secret is required"),
});

// Infers the schema as a TypeScript type.
export type SetUpTotpCodeSchemaType = z.infer<typeof setUpTotpCodeSchema>;
