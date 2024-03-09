// PURPOSE: This page displays a form for a user to change their email address.

// The relevant imports required for the page.
import ChangeEmailForm from '@/app/modules/account-settings/components/ChangeEmailForm';
import AccountSettingsLayout from '@/app/modules/account-settings/layouts/AccountSettingsLayout';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Change Email'
};

// This handler returns a form to change a user's email address.
// This handler wraps the form component with the account settings layout.
export default function ChangeEmailPage() {
    return (
        <AccountSettingsLayout>
            <ChangeEmailForm />
        </AccountSettingsLayout>
    );
}
