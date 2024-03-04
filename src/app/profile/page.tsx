// PURPOSE: This page fetches and displays the user'profile data.

// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
import ProfileTemplate from '@/app/templates/profile/ProfileTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Profile'
};

// The handler displays and injects profile data into the profile template.
export default function ProfilePage(): JSX.Element {
    return <ProfileTemplate />;
}
