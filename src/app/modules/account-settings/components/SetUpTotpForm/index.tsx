"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    setUpTotpCodeSchema,
    SetUpTotpCodeSchemaType,
} from "./setUpTotp.schema";
import styles from "./styles.module.css";

export default function SetUpTotpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SetUpTotpCodeSchemaType>({
        resolver: zodResolver(setUpTotpCodeSchema),
    });

    function handleCloseAcount(values: SetUpTotpCodeSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleCloseAcount(values);
            })}
        >
            <span className={styles.formTitle}>Set Up TOTP</span>
            <label className={styles.formLabelContainer} htmlFor="mfaSecret">
                <span className={styles.formLabelText}>MFA Secret</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register("mfaSecret")}
                />
                {errors?.mfaSecret && (
                    <span className={styles.formErrorText}>
                        {errors.mfaSecret.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Set Up TOTP
            </button>
        </form>
    );
}
