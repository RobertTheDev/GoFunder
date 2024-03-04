// The relevant imports required for the page.
import CloseAccountForm from '@/app/components/account-settings/CloseAccountForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Close Account'
};

export default function CloseAccountPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <CloseAccountForm />
        </AccountSettingsPageTemplate>
    );
}
