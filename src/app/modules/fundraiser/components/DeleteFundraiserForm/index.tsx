"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

    function handleDeleteFundraiser(values: DeleteFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleDeleteFundraiser(values);
            })}
        >
            <span className={styles.formTitle}>Delete Fundraiser</span>
            <label htmlFor="email" className={styles.formLabelContainer}>
                <span className={styles.formLabelText}>Confirm</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register("confirm")}
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
