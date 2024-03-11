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

    const nameReg = register("name");
    const descriptionReg = register("description");
    const targetReg = register("target", { valueAsNumber: true });
    const deadlineDateReg = register("deadlineDate");
    const imageReg = register("image");
    const categoryReg = register("category");

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

            {/* target */}
            <label className={styles.formLabelContainer} htmlFor="target">
                <span className={styles.formLabelText}>Set a target</span>
                <input
                    className={styles.formInput}
                    type="number"
                    onChange={targetReg.onChange}
                    onBlur={targetReg.onBlur}
                    name={targetReg.name}
                    ref={targetReg.ref}
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
                    onChange={descriptionReg.onChange}
                    onBlur={descriptionReg.onBlur}
                    name={descriptionReg.name}
                    ref={descriptionReg.ref}
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
                    onChange={deadlineDateReg.onChange}
                    onBlur={deadlineDateReg.onBlur}
                    name={deadlineDateReg.name}
                    ref={deadlineDateReg.ref}
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
                    onChange={imageReg.onChange}
                    onBlur={imageReg.onBlur}
                    name={imageReg.name}
                    ref={imageReg.ref}
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
                <select
                    onChange={categoryReg.onChange}
                    onBlur={categoryReg.onBlur}
                    name={categoryReg.name}
                    ref={categoryReg.ref}
                >
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
