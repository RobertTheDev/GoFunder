import SetUpTotpForm from '@/app/components/account-settings/SetUpTotpForm';
import AccountSettingsPageTemplate from '@/app/templates/account-settings/AccountSettingsPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Set Up TOTP'
};

export default function SetUpTotpPage() {
    return (
        <AccountSettingsPageTemplate>
            <SetUpTotpForm />
        </AccountSettingsPageTemplate>
    );
}
