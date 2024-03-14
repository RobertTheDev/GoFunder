import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Send Password Reset",
};

// This handler wraps the form component with the auth layout.
export default function SendPasswordResetPage() {
    return <p>Send Password Reset</p>;
}
