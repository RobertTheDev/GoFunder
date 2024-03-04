// The relevant imports required for the page.
import VerifyTotpForm from '@/app/components/account-settings/VerifyTotpForm';
import { Metadata } from 'next';
import { JSX } from 'react';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Verify TOTP'
};

export default function VerifyTotpPage(): JSX.Element {
    return <VerifyTotpForm />;
}
