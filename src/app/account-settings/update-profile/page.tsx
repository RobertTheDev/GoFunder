import UpdateProfileForm from '@/app/components/account-settings/UpdateProfileForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Update Profile'
};

export default function UpdateProfilePage() {
    return <UpdateProfileForm />;
}
