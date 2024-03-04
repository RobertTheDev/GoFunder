// The relevant imports required for the page.
import SetUpTotpForm from '@/app/components/account-settings/SetUpTotpForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Set Up TOTP'
};

export default function SetUpTotpPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <SetUpTotpForm />
        </AccountSettingsPageTemplate>
    );
}
