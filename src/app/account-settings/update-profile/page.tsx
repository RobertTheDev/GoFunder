import UpdateProfileForm from '@/app/components/account-settings/UpdateProfileForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Update Profile'
};

export default function UpdateProfilePage() {
    return (
        <div>
            <h1>Update Profile</h1>
            <UpdateProfileForm />
        </div>
    );
}
