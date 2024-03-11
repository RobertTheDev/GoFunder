"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ChangePasswordSchemaType,
    changePasswordSchema,
} from "./changePassword.schema";
import styles from "./styles.module.css";

export default function ChangePasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangePasswordSchemaType>({
        resolver: zodResolver(changePasswordSchema),
    });

    function handleChangePassword(values: ChangePasswordSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    const newPasswordReg = register("newPassword");
    const currentPasswordReg = register("currentPassword");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleChangePassword(values);
            })}
        >
            <span className={styles.formTitle}>Change Password</span>
            <label className={styles.formLabelContainer} htmlFor="newPassword">
                <span className={styles.formLabelText}>Email</span>
                <input
                    className={styles.formInput}
                    type="password"
                    onChange={newPasswordReg.onChange}
                    onBlur={newPasswordReg.onBlur}
                    name={newPasswordReg.name}
                    ref={newPasswordReg.ref}
                />
                {errors?.newPassword && (
                    <span className={styles.formErrorText}>
                        {errors.newPassword.message}
                    </span>
                )}
            </label>

            <label
                className={styles.formLabelContainer}
                htmlFor="currentPassword"
            >
                <span className={styles.formLabelText}>Email</span>
                <input
                    className={styles.formInput}
                    type="password"
                    onChange={currentPasswordReg.onChange}
                    onBlur={currentPasswordReg.onBlur}
                    name={currentPasswordReg.name}
                    ref={currentPasswordReg.ref}
                />
                {errors?.currentPassword && (
                    <span className={styles.formErrorText}>
                        {errors.currentPassword.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Change Password
            </button>
        </form>
    );
}
