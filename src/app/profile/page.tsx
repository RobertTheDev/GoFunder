import { Metadata } from 'next';
import ProfileTemplate from '../components/profile/ProfileTemplate';

export const metadata: Metadata = {
    title: 'Profile'
};

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ProfileTemplate />
        </div>
    );
}
