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

    const mfaSecretReg = register("mfaSecret");

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
                    onChange={mfaSecretReg.onChange}
                    onBlur={mfaSecretReg.onBlur}
                    name={mfaSecretReg.name}
                    ref={mfaSecretReg.ref}
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
