import UpdateProfileForm from '@/app/components/account-settings/UpdateProfileForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
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
