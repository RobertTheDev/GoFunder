"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEmailSchemaType, changeEmailSchema } from "./changeEmail.schema";
import styles from "./styles.module.css";

export default function ChangeEmailForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangeEmailSchemaType>({
        resolver: zodResolver(changeEmailSchema),
    });

    async function handleChangeEmail(values: ChangeEmailSchemaType) {
        await fetch("/api/account-settings/change-email", {
            method: "PUT",
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
                handleChangeEmail(values);
            })}
        >
            <span className={styles.formTitle}>Change Email</span>
            <label htmlFor="email" className={styles.formLabelContainer}>
                <span className={styles.formLabelText}>Email</span>
                <input
                    className={styles.formInput}
                    type="email"
                    onChange={emailReg.onChange}
                    onBlur={emailReg.onBlur}
                    name={emailReg.name}
                    ref={emailReg.ref}
                />
                {errors?.email?.message && (
                    <span className={styles.formErrorText}>
                        {errors.email.message}
                    </span>
                )}
            </label>

            <label htmlFor="password" className={styles.formLabelContainer}>
                <span className={styles.formLabelText}>Password</span>
                <input
                    className={styles.formInput}
                    type="password"
                    onChange={passwordReg.onChange}
                    onBlur={passwordReg.onBlur}
                    name={passwordReg.name}
                    ref={passwordReg.ref}
                />
                {errors?.password?.message && (
                    <span className={styles.formErrorText}>
                        {errors.password.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Change Email
            </button>
        </form>
    );
}
