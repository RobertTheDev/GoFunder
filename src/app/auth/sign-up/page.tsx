import { Metadata } from "next";
import SignUpForm from "../components/SignUpForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Sign Up",
};

// This handler returns a form to sign up a user.
export default function SignUpPage() {
    return <SignUpForm />;
}
