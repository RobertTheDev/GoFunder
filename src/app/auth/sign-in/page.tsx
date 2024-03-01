import SignInForm from '@/app/components/auth/SignInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In'
};

export default function SignInPage() {
    return (
        <div>
            <p>Sign In Page</p>
            <SignInForm />
        </div>
    );
}
