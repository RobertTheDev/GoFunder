// PURPOSE: This page allows the user to change their email address.

// The relevant imports required for the page.
import ChangeEmailForm from '@/app/components/account-settings/ChangeEmailForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Change Email'
};

// The handler renders the not change email page template to show on the page.
// The handler renders the change email form component to handle email change.
export default function ChangeEmailPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <ChangeEmailForm />
        </AccountSettingsPageTemplate>
    );
}
