"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SignInSchemaType, signInSchema } from "./signIn.schema";
import styles from "./styles.module.css";

export default function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(signInSchema),
    });

    async function handleSignIn(values: SignInSchemaType) {
        await fetch("/api/auth/password/sign-in", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            credentials: "include",
        });
    }

    const emailReg = register("email");
    const passwordReg = register("password");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
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
                    onChange={emailReg.onChange}
                    onBlur={emailReg.onBlur}
                    name={emailReg.name}
                    ref={emailReg.ref}
                />
                {errors?.email && (
                    <p className={styles.formErrorText}>
                        {errors.email.message}
                    </p>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="password">
                <span className={styles.formLabelText}>Password</span>
                <input
                    className={styles.formInput}
                    type="password"
                    onChange={passwordReg.onChange}
                    onBlur={passwordReg.onBlur}
                    name={passwordReg.name}
                    ref={passwordReg.ref}
                />
                {errors?.password && (
                    <span className={styles.formErrorText}>
                        {errors.password.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Sign In
            </button>
        </form>
    );
}
