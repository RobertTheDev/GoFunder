// PURPOSE: This page displays a form for a user to sign up to their account.

// The relevant imports required for the page.
import SignUpForm from "@/app/modules/auth/components/SignUpForm";
import AuthLayout from "@/app/modules/auth/layouts/AuthLayout";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Sign Up",
};

// This handler returns a form to sign up a user.
// This handler wraps the form component with the auth layout.
export default function SignUpPage() {
    return (
        <AuthLayout>
            <SignUpForm />
        </AuthLayout>
    );
}
