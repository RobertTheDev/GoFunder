import SignUpForm from "@/app/auth/components/SignUpForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Sign Up",
};

// This handler returns a form to sign up a user.
export default function SignUpPage() {
    return <SignUpForm />;
}
