"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    CreateFundraiserSchemaType,
    createFundraiserSchema,
} from "./createFundraiser.schema";
import styles from "./styles.module.css";

export default function CreateFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateFundraiserSchemaType>({
        resolver: zodResolver(createFundraiserSchema),
    });

    function handleCreateFundraiser(values: CreateFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                // eslint-disable-next-line no-alert
                handleCreateFundraiser(values);
            })}
        >
            <span className={styles.formTitle}>Create Fundraiser</span>
            {/* NAME */}
            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>
                    Provide a name for your fundraiser
                </span>
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

            {/* target */}
            <label className={styles.formLabelContainer} htmlFor="target">
                <span className={styles.formLabelText}>Set a target</span>
                <input
                    className={styles.formInput}
                    type="number"
                    {...register("target", { valueAsNumber: true })}
                />
                {errors?.target && (
                    <p className={styles.formErrorText}>
                        {errors.target.message}
                    </p>
                )}
            </label>

            {/* DESCRIPTION */}
            <label className={styles.formLabelContainer} htmlFor="description">
                <span className={styles.formLabelText}>Description</span>
                <textarea
                    className={styles.formInput}
                    {...register("description")}
                />
                {errors?.description && (
                    <p className={styles.formErrorText}>
                        {errors.description.message}
                    </p>
                )}
            </label>

            {/* deadline */}
            <label className={styles.formLabelContainer} htmlFor="deadlineDate">
                <span className={styles.formLabelText}>Deadline Date</span>
                <input
                    className={styles.formInput}
                    type="date"
                    {...register("deadlineDate", { valueAsDate: true })}
                />
                {errors?.deadlineDate && (
                    <p className={styles.formErrorText}>
                        {errors.deadlineDate.message}
                    </p>
                )}
            </label>

            {/* IMAGE */}
            <label className={styles.formLabelContainer} htmlFor="image">
                <span className={styles.formLabelText}>image</span>
                <input
                    className={styles.formInput}
                    type="file"
                    {...register("image")}
                />
                {errors?.image && (
                    <p className={styles.formErrorText}>
                        {errors.image.message}
                    </p>
                )}
            </label>

            {/* category */}
            <label className={styles.formLabelContainer} htmlFor="category">
                <span className={styles.formLabelText}>category</span>
                <select {...register("category")}>
                    <option>Burger</option>
                    <option>Pizza</option>
                </select>
                {errors?.category && (
                    <p className={styles.formErrorText}>
                        {errors.category.message}
                    </p>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                {/* <div className="loader" /> */}
                <span>Create Fundraiser</span>
            </button>
        </form>
    );
}
