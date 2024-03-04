// PURPOSE: This page displays a form for a user to sign in to their account.

// The relevant imports required for the page.
import { JSX } from 'react';
import SignInForm from '@/app/components/auth/SignInForm';
import AuthPageTemplate from '@/app/templates/auth/AuthPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Sign In'
};

// This handler returns and displays a form to sign in a user.
// This handler wraps the form component with the auth page layout template.
export default function SignInPage(): JSX.Element {
    return (
        <AuthPageTemplate>
            <SignInForm />;
        </AuthPageTemplate>
    );
}
