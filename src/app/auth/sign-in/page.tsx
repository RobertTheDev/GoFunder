import SignInForm from "@/app/modules/auth/components/SignInForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Sign In",
};

// This handler wraps the form component with the auth layout.
export default function SignInPage() {
    return <SignInForm />;
}
