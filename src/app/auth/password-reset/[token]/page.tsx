import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Reset Password",
};

// This handler wraps the form component with the auth layout.
export default function ResetPasswordPage() {
    return <p>Reset Password</p>;
}
