import { Metadata } from "next";
import ChangePasswordForm from "../components/ChangePasswordForm/ChangePasswordForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Change Password",
};

// This handler returns a form to change a user's password.
export default function ChangePasswordPage() {
    return <ChangePasswordForm />;
}
