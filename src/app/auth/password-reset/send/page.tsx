import { Metadata } from "next";
import SendPasswordResetForm from "../../components/SendPasswordReset";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Send Password Reset",
};

// This handler wraps the form component with the auth layout.
export default function SendPasswordResetPage() {
    return <SendPasswordResetForm />;
}
