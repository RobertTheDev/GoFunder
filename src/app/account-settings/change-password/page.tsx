import ChangePasswordForm from '@/app/components/account-settings/ChangePasswordForm/ChangePasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Change Password'
};

export default function ChangePasswordPage() {
    return (
        <div>
            <h1>Change Password</h1>
            <ChangePasswordForm />
        </div>
    );
}
