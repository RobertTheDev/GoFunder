"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    CreateDonationSchemaType,
    createDonationSchema,
} from "./createDonation.schema";
import styles from "./styles.module.css";

export default function CreateDonationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateDonationSchemaType>({
        resolver: zodResolver(createDonationSchema),
    });

    function handleCreateDonation(values: CreateDonationSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleCreateDonation(values);
            })}
        >
            <span className={styles.formTitle}>Make A Donation</span>
            <label htmlFor="amount" className={styles.formLabelContainer}>
                <span className={styles.formlLabelText}>Amount</span>
                <input
                    className={styles.formInput}
                    type="number"
                    {...register("amount", { valueAsNumber: true })}
                />
                {errors?.amount && (
                    <span className={styles.formErrorText}>
                        {errors.amount.message}
                    </span>
                )}
            </label>

            <label htmlFor="annonymous" className={styles.formLabelContainer}>
                <span className={styles.formlLabelText}>Annonymous</span>
                <input
                    className={styles.formCheckbox}
                    type="checkbox"
                    {...register("annonymous")}
                />
                {errors?.annonymous && (
                    <span className={styles.formErrorText}>
                        {errors.annonymous.message}
                    </span>
                )}
            </label>

            <label htmlFor="message" className={styles.formLabelContainer}>
                <span className={styles.formlLabelText}>
                    Message (Optional)
                </span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register("message")}
                />
                {errors?.message && (
                    <span className={styles.formErrorText}>
                        {errors.message.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Create Donation
            </button>
        </form>
    );
}
