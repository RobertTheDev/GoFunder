'use client';

import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SignInSchemaType, signInSchema } from './signIn.schema';
import styles from './styles.module.css';

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
            className={styles.formContainer}
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleSignIn(values);
            })}
        >
            <span className={styles.formTitle}>Sign in to GoFunder</span>

            <div className={styles.formLinkButtonGroup}>
                <Link className={styles.formLinkButton} href="/auth/sign-up">
                    Sign Up
                </Link>
                <Link className={styles.formLinkButton} href="/auth/sign-in">
                    Sign In
                </Link>
            </div>

            <label className={styles.formLabelContainer} htmlFor="email">
                <span className={styles.formLabelText}>Email</span>
                <input
                    className={styles.formInput}
                    type="email"
                    {...register('email')}
                />
                {errors?.email && (
                    <p className={styles.formErrorText}>
                        {errors.email.message}
                    </p>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Sign In
            </button>

            <div className={styles.formSeperatorContainer}>
                <div className={styles.formSeperatorLine} />
                <div className={styles.formSeperatorTextContainer}>
                    <p className={styles.formSeperatorTextContainer}>or</p>
                </div>
            </div>
            <div className={styles.formSocialButtonGroup}>
                <button
                    className={styles.formSocialButtonFacebook}
                    type="button"
                >
                    <FaFacebook className={styles.formSocialButtonIcon} />
                    Sign In With Facebook
                </button>
                <button className={styles.formSocialButtonGithub} type="button">
                    <FaGithub className={styles.formSocialButtonIcon} />
                    Sign In With Github
                </button>
                <button className={styles.formSocialButtonGoogle} type="button">
                    <FaGoogle className={styles.formSocialButtonIcon} />
                    Sign In With Google
                </button>
            </div>
        </form>
    );
}
