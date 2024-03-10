// PURPOSE: This page displays a form for a user verfy a TOTP (time based one-time password) code.

// The relevant imports required for the page.
import VerifyTotpForm from "@/app/modules/account-settings/components/VerifyTotpForm";
import AccountSettingsLayout from "@/app/modules/account-settings/layouts/AccountSettingsLayout";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Verify TOTP",
};

// This handler returns a form to verify a TOTP code for a user.
// This handler wraps the form component with the account settings layout.
export default function VerifyTotpPage() {
    return (
        <AccountSettingsLayout>
            <VerifyTotpForm />
        </AccountSettingsLayout>
    );
}
