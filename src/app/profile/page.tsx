// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
// import ProfileTemplate from '../components/profile/ProfileTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Profile'
};

export default function ProfilePage(): JSX.Element {
    return (
        <div>
            <h1>Profile Page</h1>
            {/* <ProfileTemplate /> */}
        </div>
    );
}
