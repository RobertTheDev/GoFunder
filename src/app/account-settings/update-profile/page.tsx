import UpdateProfileForm from '@/app/components/account-settings/UpdateProfileForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Update Profile'
};

export default function UpdateProfilePage() {
    return (
        <AccountSettingsPageTemplate>
            <UpdateProfileForm />
        </AccountSettingsPageTemplate>
    );
}
