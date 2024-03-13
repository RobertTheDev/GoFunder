import ChangeEmailForm from "@/app/account-settings/components/ChangeEmailForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Change Email",
};

// This handler returns a form to change a user's email address.
export default function ChangeEmailPage() {
    return <ChangeEmailForm />;
}
