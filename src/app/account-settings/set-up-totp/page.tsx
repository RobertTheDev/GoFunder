// PURPOSE: This page displays a form for a user to set up TOTP (time based one-time password).

// The relevant imports required for the page.
import SetUpTotpForm from '@/app/modules/account-settings/components/SetUpTotpForm';
import AccountSettingsPageTemplate from '@/app/modules/account-settings/layouts/AccountSettingsLayout';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Set Up TOTP'
};

// This handler returns and displays a form to set up a TOTP for a user.
// This handler wraps the form component with the account settings page layout template.
export default function SetUpTotpPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <SetUpTotpForm />
        </AccountSettingsPageTemplate>
    );
}
