// PURPOSE: This page displays a form for a user to change their password.

// The relevant imports required for the page.
import ChangePasswordForm from '@/app/modules/account-settings/components/ChangePasswordForm/ChangePasswordForm';
import AccountSettingsLayout from '@/app/modules/account-settings/layouts/AccountSettingsLayout';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Change Password'
};

// This handler returns a form to change a user's password.
// This handler wraps the form component with the account settings layout.
export default function ChangePasswordPage() {
    return (
        <AccountSettingsLayout>
            <ChangePasswordForm />
        </AccountSettingsLayout>
    );
}
