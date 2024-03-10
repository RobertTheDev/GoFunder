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

    function handleChangeEmail(values: ChangeEmailSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleChangeEmail(values);
            })}
        >
            <span className={styles.formTitle}>Change Email</span>
            <label htmlFor="email" className={styles.formLabelContainer}>
                <span className={styles.formLabelText}>Email</span>
                <input
                    className={styles.formInput}
                    type="email"
                    {...register("email")}
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
                    {...register("password")}
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
