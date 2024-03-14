"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
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

    const { slug } = useParams();

    async function handleUpdateFundraiser(values: UpdateFundraiserSchemaType) {
        await fetch(`/api/fundraisers/${slug}/update`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
            credentials: "include",
        });
    }

    const nameReg = register("name");

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
                    onChange={nameReg.onChange}
                    onBlur={nameReg.onBlur}
                    name={nameReg.name}
                    ref={nameReg.ref}
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
