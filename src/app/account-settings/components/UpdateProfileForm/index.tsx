"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    updateProfileSchema,
    UpdateProfileSchemaType,
} from "./updateProfile.schema";
import styles from "./styles.module.css";

export default function UpdateProfileForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UpdateProfileSchemaType>({
        resolver: zodResolver(updateProfileSchema),
    });

    async function handleProfileUpdate(values: UpdateProfileSchemaType) {
        await fetch("/api/account-settings/update-profile", {
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
    const annonymousReg = register("annonymous");

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit((values) => {
                handleProfileUpdate(values);
            })}
        >
            <span className={styles.formTitle}>Update Profile</span>
            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>Name</span>
                <input
                    className={styles.formInput}
                    type="text"
                    onChange={nameReg.onChange}
                    onBlur={nameReg.onBlur}
                    name={nameReg.name}
                    ref={nameReg.ref}
                />
                {errors?.name && (
                    <span className={styles.formErrorText}>
                        {errors.name.message}
                    </span>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="annonymous">
                <span className={styles.formLabelText}>Annonymous</span>
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

            <button className={styles.formButton} type="submit">
                Update Profile
            </button>
        </form>
    );
}
