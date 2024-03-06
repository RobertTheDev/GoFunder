// PURPOSE: This page displays a form for a user to sign up to their account.

// The relevant imports required for the page.
import { JSX } from 'react';
import SignUpForm from '@/app/components/auth/SignUpForm';
import AuthPageTemplate from '@/app/templates/auth/AuthPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Sign Up'
};

// This handler returns and displays a form to sign up a user.
// This handler wraps the form component with the auth page layout template.
export default function SignUpPage(): JSX.Element {
    return (
        <AuthPageTemplate>
            <SignUpForm />
        </AuthPageTemplate>
    );
}
