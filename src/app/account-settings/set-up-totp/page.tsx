import SetUpTotpForm from '@/app/components/account-settings/SetUpTotpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Set Up TOTP'
};

export default function SetUpTotpPage() {
    return (
        <div>
            <h1>Set Up Totp</h1>
            <SetUpTotpForm />
        </div>
    );
}
