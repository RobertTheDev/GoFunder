// PURPOSE: This page displays a form for a user to update their profile.

// The relevant imports required for the page.
import UpdateProfileForm from '@/app/modules/account-settings/components/UpdateProfileForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Update Profile'
};

// This handler returns and displays a form to update a user's profile.
// This handler wraps the form component with the account settings page layout template.
export default function UpdateProfilePage(): JSX.Element {
    return (
        <AccountSettingsPageTemplate>
            <UpdateProfileForm />
        </AccountSettingsPageTemplate>
    );
}
