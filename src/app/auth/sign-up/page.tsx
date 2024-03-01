import SignUpForm from '@/app/components/auth/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up'
};

export default function SignUpPage() {
    return (
        <div>
            <p>Sign Up Page</p>
            <SignUpForm />
        </div>
    );
}
