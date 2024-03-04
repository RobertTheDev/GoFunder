// The relevant imports required for the page.
import VerifyTotpForm from '@/app/components/account-settings/VerifyTotpForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Verify TOTP'
};

export default function VerifyTotpPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <VerifyTotpForm />
        </AccountSettingsPageTemplate>
    );
}
