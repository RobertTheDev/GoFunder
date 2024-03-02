import ChangePasswordForm from '@/app/components/account-settings/ChangePasswordForm/ChangePasswordForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Change Password'
};

export default function ChangePasswordPage() {
    return (
        <AccountSettingsPageTemplate>
            <ChangePasswordForm />
        </AccountSettingsPageTemplate>
    );
}
