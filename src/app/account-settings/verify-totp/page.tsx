import VerifyTotpForm from '@/app/components/account-settings/VerifyTotpForm';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Verify TOTP'
};

export default function VerifyTotpPage() {
    return <VerifyTotpForm />;
}
