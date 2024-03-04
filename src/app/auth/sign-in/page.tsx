// The relevant imports required for the page.
import { JSX } from 'react';
import SignInForm from '@/app/components/auth/SignInForm';
import AuthPageTemplate from '@/app/templates/auth/AuthPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Sign In'
};

export default function SignInPage(): JSX.Element {
    return (
        <AuthPageTemplate>
            <SignInForm />;
        </AuthPageTemplate>
    );
}
