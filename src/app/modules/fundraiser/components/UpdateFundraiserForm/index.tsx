"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    updateFundraiserSchema,
    UpdateFundraiserSchemaType,
} from "./updateFundraiser.schema";
import styles from "./styles.module.css";

export default function UpdateFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateFundraiserSchemaType>({
        resolver: zodResolver(updateFundraiserSchema),
    });

    function handleUpdateFundraiser(values: UpdateFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleUpdateFundraiser(values);
            })}
        >
            <span className={styles.formTitle}>Update Fundraiser</span>
            <label htmlFor="name" className={styles.formLabelContainer}>
                <span className={styles.formLabelText}>Confirm</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register("name")}
                />
                {errors?.name && (
                    <p className={styles.formErrorText}>
                        {errors.name.message}
                    </p>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Update Fundraiser
            </button>
        </form>
    );
}
