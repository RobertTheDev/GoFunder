import CloseAccountForm from '@/app/components/account-settings/CloseAccountForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Close Account'
};

export default function CloseAccountPage() {
    return (
        <div>
            <h1>Close Account</h1>
            <CloseAccountForm />
        </div>
    );
}
