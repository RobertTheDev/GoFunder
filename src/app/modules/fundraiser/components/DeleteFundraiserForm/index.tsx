"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import {
    deleteFundraiserSchema,
    DeleteFundraiserSchemaType,
} from "./deleteFundraiser.schema";
import styles from "./styles.module.css";

export default function DeleteFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DeleteFundraiserSchemaType>({
        resolver: zodResolver(deleteFundraiserSchema),
    });

    const { slug } = useParams();

    async function handleDeleteFundraiser(values: DeleteFundraiserSchemaType) {
        await fetch(`/api/fundraisers/${slug}/delete`, {
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
                handleDeleteFundraiser(values);
            })}
        >
            <span className={styles.formTitle}>Delete Fundraiser</span>
            <label htmlFor="email" className={styles.formLabelContainer}>
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
                    <p className={styles.formErrorText}>
                        {errors.confirm.message}
                    </p>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Delete Fundraiser
            </button>
        </form>
    );
}
