'use client';

import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SignInSchemaType, signInSchema } from './signIn.schema';

export default function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(signInSchema)
    });

    function handleSignIn(values: SignInSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="auth-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleSignIn(values);
            })}
        >
            <span className="auth-form-title">Sign in to GoFunder</span>

            <div className="auth-form-link-button-group">
                <Link className="auth-form-link-button" href="/auth/sign-up">
                    Sign Up
                </Link>
                <Link className="auth-form-link-button" href="/auth/sign-in">
                    Sign In
                </Link>
            </div>

            <label className="auth-form-label-container" htmlFor="email">
                <span className="auth-form-label-text">Email</span>
                <input
                    className="auth-form-input"
                    type="email"
                    {...register('email')}
                />
                {errors?.email && (
                    <p className="auth-form-error-text">
                        {errors.email.message}
                    </p>
                )}
            </label>

            <button className="auth-form-button" type="submit">
                Sign In
            </button>

            <div className="auth-form-seperator-container">
                <div className="auth-form-seperator-line" />
                <div className="auth-form-seperator-text-container">
                    <p className="auth-form-seperator-text">or</p>
                </div>
            </div>
            <div className="auth-form-social-button-group">
                <button
                    className="auth-form-social-button-facebook"
                    type="button"
                >
                    <FaFacebook className="auth-form-social-button-icon" />
                    Sign In With Facebook
                </button>
                <button
                    className="auth-form-social-button-github"
                    type="button"
                >
                    <FaGithub className="auth-form-social-button-icon" />
                    Sign In With Github
                </button>
                <button
                    className="auth-form-social-button-google"
                    type="button"
                >
                    <FaGoogle className="auth-form-social-button-icon" />
                    Sign In With Google
                </button>
            </div>
        </form>
    );
}
