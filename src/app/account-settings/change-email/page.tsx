// PURPOSE: This page displays a form for a user to change their email address.

// The relevant imports required for the page.
import ChangeEmailForm from '@/app/components/account-settings/ChangeEmailForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Change Email'
};

// This handler returns and displays a form to change a user's email address.
// This handler wraps the form component with the account settings page layout template.
export default function ChangeEmailPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <ChangeEmailForm />
        </AccountSettingsPageTemplate>
    );
}
