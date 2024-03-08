// PURPOSE: This page displays a form for a user to close their account.

// The relevant imports required for the page.
import CloseAccountForm from '@/app/modules/account-settings/components/CloseAccountForm';
import AccountSettingsLayout from '@/app/modules/account-settings/layouts/AccountSettingsLayout';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Close Account'
};

// This handler returns and displays a form to close a user's account.
// This handler wraps the form component with the account settings page layout template.
export default function CloseAccountPage(): JSX.Element {
    return (
        <AccountSettingsLayout>
            <CloseAccountForm />
        </AccountSettingsLayout>
    );
}
