// PURPOSE: This page displays a form for a user to sign in to their account.

// The relevant imports required for the page.
import SignInForm from "@/app/modules/auth/components/SignInForm";
import AuthLayout from "@/app/modules/auth/layouts/AuthLayout";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Sign In",
};

// This handler returns a form to sign in a user.
// This handler wraps the form component with the auth layout.
export default function SignInPage() {
    return (
        <AuthLayout>
            <SignInForm />
        </AuthLayout>
    );
}
