import ChangeEmailForm from '@/app/components/account-settings/ChangeEmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Change Email'
};

export default function ChangeEmailPage() {
    return <ChangeEmailForm />;
}
