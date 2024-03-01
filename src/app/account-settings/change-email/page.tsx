import ChangeEmailForm from '@/app/components/account-settings/ChangeEmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Change Email'
};

export default function ChangeEmailPage() {
    return (
        <div>
            <h1>Change Email</h1>
            <ChangeEmailForm />
        </div>
    );
}
