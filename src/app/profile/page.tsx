import { Metadata } from 'next';
// import ProfileTemplate from '../components/profile/ProfileTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Profile'
};

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile Page</h1>
            {/* <ProfileTemplate /> */}
        </div>
    );
}
