// The relevant imports required for the page.
import UpdateProfileForm from '@/app/components/account-settings/UpdateProfileForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Update Profile'
};

export default function UpdateProfilePage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <UpdateProfileForm />
        </AccountSettingsPageTemplate>
    );
}
