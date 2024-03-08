// PURPOSE: This page displays a form for a user verfy a TOTP (time based one-time password) code.

// The relevant imports required for the page.
import VerifyTotpForm from '@/app/modules/account-settings/components/VerifyTotpForm';
import AccountSettingsPageTemplate from '@/app/modules/account-settings/layouts/AccountSettingsLayout';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Verify TOTP'
};

// This handler returns and displays a form to verify a TOTP code for a user.
// This handler wraps the form component with the account settings page layout template.
export default function VerifyTotpPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <VerifyTotpForm />
        </AccountSettingsPageTemplate>
    );
}
