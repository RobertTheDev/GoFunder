// The relevant imports required for the page.
import ChangePasswordForm from '@/app/components/account-settings/ChangePasswordForm/ChangePasswordForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Change Password'
};

export default function ChangePasswordPage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <ChangePasswordForm />
        </AccountSettingsPageTemplate>
    );
}
