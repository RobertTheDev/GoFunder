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

    const amountReg = register("amount", { valueAsNumber: true });
    const annonymousReg = register("annonymous");
    const messageReg = register("message");

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
                    onChange={amountReg.onChange}
                    onBlur={amountReg.onBlur}
                    name={amountReg.name}
                    ref={amountReg.ref}
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
                    onChange={annonymousReg.onChange}
                    onBlur={annonymousReg.onBlur}
                    name={annonymousReg.name}
                    ref={annonymousReg.ref}
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
                    onChange={messageReg.onChange}
                    onBlur={messageReg.onBlur}
                    name={messageReg.name}
                    ref={messageReg.ref}
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
