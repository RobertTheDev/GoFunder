// PURPOSE: This page displays a form for a user to close their account.

// The relevant imports required for the page.
import CloseAccountForm from "@/app/account-settings/components/CloseAccountForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Close Account",
};

// This handler returns a form to close a user's account.
// This handler wraps the form component with the account settings layout.
export default function CloseAccountPage() {
    return <CloseAccountForm />;
}
