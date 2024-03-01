import VerifyEmailForm from '@/app/components/account-settings/VerifyEmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Verify Email'
};

export default function VerifyEmailPage() {
    return (
        <div>
            <h1>Verify Email</h1>
            <VerifyEmailForm />
        </div>
    );
}
