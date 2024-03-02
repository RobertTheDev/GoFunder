import ChangePasswordForm from '@/app/components/account-settings/ChangePasswordForm/ChangePasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Change Password'
};

export default function ChangePasswordPage() {
    return <ChangePasswordForm />;
}
