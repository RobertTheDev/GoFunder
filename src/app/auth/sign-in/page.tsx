import SignInForm from '@/app/components/auth/SignInForm';
import AuthPageTemplate from '@/app/templates/auth/AuthPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Sign In'
};

export default function SignInPage() {
    return (
        <AuthPageTemplate>
            <SignInForm />;
        </AuthPageTemplate>
    );
}
