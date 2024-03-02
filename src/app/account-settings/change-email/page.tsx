import ChangeEmailForm from '@/app/components/account-settings/ChangeEmailForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Change Email'
};

export default function ChangeEmailPage() {
    return (
        <AccountSettingsPageTemplate>
            <ChangeEmailForm />
        </AccountSettingsPageTemplate>
    );
}
