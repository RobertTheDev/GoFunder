import { signInSchema } from "./signIn.schema";

export default async function signUp(_prevState: unknown, formData: FormData) {
    try {
        const rawFormData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const validatedFields = signInSchema.safeParse(rawFormData);

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        await fetch("/api/auth/password/sign-in", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
            credentials: "include",
        });

        return { message: "Successfully signed in" };
    } catch (error) {
        return { message: "Failed to sign in. Please try again" };
    }
}
