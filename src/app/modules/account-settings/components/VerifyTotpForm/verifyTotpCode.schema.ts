import { z, object, string } from 'zod';

// This schema defines fields required to verify a user's TOTP code.
export const verifyTotpCodeSchema = object({
    code: string({
        invalid_type_error: 'Code must be of type string',
        required_error:
            // eslint-disable-next-line sonarjs/no-duplicate-string
            'Please provide the 6 digit code generated by your authenticator app'
    })
        .max(
            6,
            'Please provide the 6 digit code generated by your authenticator app'
        )
        .min(
            6,
            'Please provide the 6 digit code generated by your authenticator app'
        )
});

// Infers the schema as a TypeScipt type.
export type VerifyTotpCodeSchemaType = z.infer<typeof verifyTotpCodeSchema>;