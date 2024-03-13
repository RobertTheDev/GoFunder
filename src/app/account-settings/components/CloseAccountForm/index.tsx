"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    closeAccountSchema,
    CloseAccountSchemaType,
} from "./closeAccount.schema";
import styles from "./styles.module.css";

export default function CloseAccountForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CloseAccountSchemaType>({
        resolver: zodResolver(closeAccountSchema),
    });

    async function handleCloseAcount(values: CloseAccountSchemaType) {
        await fetch("/api/account-settings/close-account", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            credentials: "include",
        });
    }

    const confirmReg = register("confirm");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                handleCloseAcount(values);
            })}
        >
            <span className={styles.formTitle}>Close Account</span>
            <label className={styles.formLabelContainer} htmlFor="confirm">
                <span className={styles.formLabelText}>Confirm</span>
                <input
                    className={styles.formInput}
                    type="text"
                    onChange={confirmReg.onChange}
                    onBlur={confirmReg.onBlur}
                    name={confirmReg.name}
                    ref={confirmReg.ref}
                />
                {errors?.confirm && (
                    <span className={styles.formErrorText}>
                        {errors.confirm.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Close Account
            </button>
        </form>
    );
}
