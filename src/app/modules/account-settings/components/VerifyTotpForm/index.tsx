"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    verifyTotpCodeSchema,
    type VerifyTotpCodeSchemaType,
} from "./verifyTotpCode.schema";
import styles from "./styles.module.css";

export default function VerifyTotpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<VerifyTotpCodeSchemaType>({
        resolver: zodResolver(verifyTotpCodeSchema),
    });

    function handleVerifyTotp(values: VerifyTotpCodeSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleVerifyTotp(values);
            })}
        >
            <span className={styles.formTitle}>Verify TOTP</span>
            <label className={styles.formLabelContainer} htmlFor="code">
                <span className={styles.formLabelText}>Code</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register("code")}
                />
                {errors?.code && (
                    <span className={styles.formErrorText}>
                        {errors.code.message}
                    </span>
                )}
            </label>
            <button className={styles.formButton} type="submit">
                Verify TOTP
            </button>
        </form>
    );
}
