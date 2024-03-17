import { Metadata } from "next";
import SignInForm from "../components/SignInForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Sign In",
};

// This handler wraps the form component with the auth layout.
export default function SignInPage() {
    return <SignInForm />;
}
