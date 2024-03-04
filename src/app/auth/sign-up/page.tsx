import SignUpForm from '@/app/components/auth/SignUpForm';
import AuthPageTemplate from '@/app/templates/auth/AuthPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Sign Up'
};

export default function SignUpPage() {
    return (
        <AuthPageTemplate>
            <SignUpForm />;
        </AuthPageTemplate>
    );
}
