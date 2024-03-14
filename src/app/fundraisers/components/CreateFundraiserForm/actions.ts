import { createFundraiserSchema } from "./createFundraiser.schema";

export default async function createFundraiser(
    _prevState: unknown,
    formData: FormData,
) {
    try {
        const rawFormData = {
            category: formData.get("category"),
            description: formData.get("description"),
            image: formData.get("image"),
            name: formData.get("name"),
            target: Number(formData.get("target")),
        };

        const validatedFields = createFundraiserSchema.safeParse(rawFormData);

        // Return early if the form data is invalid
        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        await fetch(`/api/fundraisers/create`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData),
            credentials: "include",
        });

        return { message: "Successfully created fundraiser" };
    } catch (error) {
        return { message: "Failed to create fundraiser. Please try again" };
    }
}
