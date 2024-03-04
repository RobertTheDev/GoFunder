import SignUpForm from '@/app/components/auth/SignUpForm';
import AuthPageTemplate from '@/app/templates/auth/AuthPage';
import { Metadata } from 'next';

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
