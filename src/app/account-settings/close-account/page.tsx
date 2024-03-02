import CloseAccountForm from '@/app/components/account-settings/CloseAccountForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Close Account'
};

export default function CloseAccountPage() {
    return <CloseAccountForm />;
}
