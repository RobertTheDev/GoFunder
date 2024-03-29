"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./styles.module.css";
import signUp from "./actions";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className={styles.formButton} type="submit" disabled={pending}>
            {pending ? "Pending" : "Sign In"}
        </button>
    );
}

const initialState = {
    message: "",
};

export default function SignInForm() {
    const [state, formAction] = useFormState(signUp, initialState);

    return (
        <form className={styles.formContainer} action={formAction}>
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
                <input className={styles.formInput} type="email" name="email" />
                {state.errors?.email && (
                    <span className={styles.formErrorText}>
                        {state.errors.email[0]}
                    </span>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="password">
                <span className={styles.formLabelText}>Password</span>
                <input
                    className={styles.formInput}
                    type="password"
                    name="password"
                />
                {state.errors?.password && (
                    <span className={styles.formErrorText}>
                        {state.errors.password[0]}
                    </span>
                )}
            </label>

            <Link href="/auth/password-reset/send">Forgot password?</Link>

            <SubmitButton />
        </form>
    );
}
