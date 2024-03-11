"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchemaType, signUpSchema } from "./signUp.schema";
import styles from "./styles.module.css";

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema),
    });

    function handleSignUp(values: SignUpSchemaType): void {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    const emailReg = register("email");
    const nameReg = register("name");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleSignUp(values);
            })}
        >
            <span className={styles.formTitle}>Sign up to GoFunder</span>

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
                    onChange={emailReg.onChange}
                    onBlur={emailReg.onBlur}
                    name={emailReg.name}
                    ref={emailReg.ref}
                />
                {errors?.email && (
                    <span className={styles.formErrorText}>
                        {errors.email.message}
                    </span>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>Name</span>
                <input
                    className={styles.formInput}
                    type="text"
                    onChange={nameReg.onChange}
                    onBlur={nameReg.onBlur}
                    name={nameReg.name}
                    ref={nameReg.ref}
                />
                {errors?.name && (
                    <span className={styles.formErrorText}>
                        {errors.name.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Sign Up
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
                    Sign Up With Facebook
                </button>
                <button className={styles.formSocialButtonGithub} type="button">
                    <FaGithub className={styles.formSocialButtonIcon} />
                    Sign Up With Github
                </button>
                <button className={styles.formSocialButtonGoogle} type="button">
                    <FaGoogle className={styles.formSocialButtonIcon} />
                    Sign Up With Google
                </button>
            </div>
        </form>
    );
}
