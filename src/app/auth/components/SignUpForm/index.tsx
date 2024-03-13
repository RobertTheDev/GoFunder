"use client";

import Link from "next/link";
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

    async function handleSignUp(values: SignUpSchemaType) {
        await fetch("/api/auth/password/sign-up", {
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
    const nameReg = register("name");
    const passwordReg = register("password");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
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

            <label className={styles.formLabelContainer} htmlFor="password">
                <span className={styles.formLabelText}>Password</span>
                <input
                    className={styles.formInput}
                    type="password"
                    onChange={emailReg.onChange}
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
                Sign Up
            </button>
        </form>
    );
}
