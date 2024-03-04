'use client';

import Link from 'next/link';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchemaType, signUpSchema } from './signUp.schema';

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema)
    });

    function handleSignUp(values: SignUpSchemaType): void {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="auth-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleSignUp(values);
            })}
        >
            <span className="auth-form-title">Sign up to GoFunder</span>

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
                    <span className="auth-form-error-text">
                        {errors.email.message}
                    </span>
                )}
            </label>

            <label className="auth-form-label-container" htmlFor="name">
                <span className="auth-form-label-text">Name</span>
                <input
                    className="auth-form-input"
                    type="text"
                    {...register('name')}
                />
                {errors?.name && (
                    <span className="auth-form-error-text">
                        {errors.name.message}
                    </span>
                )}
            </label>

            <button className="auth-form-button" type="submit">
                Sign Up
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
                    Sign Up With Facebook
                </button>
                <button
                    className="auth-form-social-button-github"
                    type="button"
                >
                    <FaGithub className="auth-form-social-button-icon" />
                    Sign Up With Github
                </button>
                <button
                    className="auth-form-social-button-google"
                    type="button"
                >
                    <FaGoogle className="auth-form-social-button-icon" />
                    Sign Up With Google
                </button>
            </div>
        </form>
    );
}
