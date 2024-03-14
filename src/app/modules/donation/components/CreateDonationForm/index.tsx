"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
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

    const { slug } = useParams();

    async function handleCreateDonation(values: CreateDonationSchemaType) {
        await fetch(`/api/donations/create/${slug}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            credentials: "include",
        });
    }

    const amountReg = register("amount", { valueAsNumber: true });
    const messageReg = register("message");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
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
