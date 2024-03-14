import { Metadata } from "next";
import ResetPasswordForm from "../../components/ResetPasswordForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Reset Password",
};

// This handler wraps the form component with the auth layout.
export default function ResetPasswordPage() {
    return <ResetPasswordForm />;
}
