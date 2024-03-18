"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./styles.module.css";
import signUp from "./actions";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className={styles.formButton} type="submit" disabled={pending}>
            {/* {!pending ? "Pending" : "Sign Up"} */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                }}
            >
                <div className={styles.loading}>
                    <span className={styles.loadingDot} />
                    <span className={styles.loadingDot} />
                    <span className={styles.loadingDot} />
                </div>
                <p style={{ margin: 0, padding: 0 }}>Pending</p>
            </div>
        </button>
    );
}

const initialState = {
    message: "",
};

export default function SignUpForm() {
    const [state, formAction] = useFormState(signUp, initialState);

    return (
        <form className={styles.formContainer} action={formAction}>
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
                <input className={styles.formInput} type="email" name="email" />
                {state.errors?.email && (
                    <span className={styles.formErrorText}>
                        {state.errors.email[0]}
                    </span>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>Name</span>
                <input className={styles.formInput} type="text" name="name" />
                {state.errors?.name && (
                    <span className={styles.formErrorText}>
                        {state.errors.name[0]}
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

            <SubmitButton />
        </form>
    );
}
