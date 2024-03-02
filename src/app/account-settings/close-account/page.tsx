import CloseAccountForm from '@/app/components/account-settings/CloseAccountForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Close Account'
};

export default function CloseAccountPage() {
    return (
        <AccountSettingsPageTemplate>
            <CloseAccountForm />
        </AccountSettingsPageTemplate>
    );
}
