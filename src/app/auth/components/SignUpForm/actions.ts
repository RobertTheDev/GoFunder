import { signUpSchema } from "./signUp.schema";

export default async function signUp(_prevState: unknown, formData: FormData) {
    try {
        const rawFormData = {
            email: formData.get("email"),
            name: formData.get("name"),
            password: formData.get("password"),
        };

        const validatedFields = signUpSchema.safeParse(rawFormData);

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        await fetch("/api/auth/password/sign-up", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
            credentials: "include",
        });

        return { message: "Successfully signed up" };
    } catch (error) {
        return { message: "Failed to sign up. Please try again" };
    }
}
