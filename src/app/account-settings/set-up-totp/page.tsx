// PURPOSE: This page displays a form for a user to set up TOTP (time based one-time password).

// The relevant imports required for the page.
import SetUpTotpForm from "@/app/modules/account-settings/components/SetUpTotpForm";
import AccountSettingsLayout from "@/app/modules/account-settings/layouts/AccountSettingsLayout";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Set Up TOTP",
};

// This handler returns a form to set up a TOTP for a user.
// This handler wraps the form component with the account settings layout.
export default function SetUpTotpPage() {
    return (
        <AccountSettingsLayout>
            <SetUpTotpForm />
        </AccountSettingsLayout>
    );
}
