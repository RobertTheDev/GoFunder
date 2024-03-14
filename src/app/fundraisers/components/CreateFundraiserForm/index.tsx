"use client";

import { useFormState, useFormStatus } from "react-dom";
import createFundraiser from "./actions";
import styles from "./styles.module.css";

function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus();

    return (
        <button className={styles.formButton} type="submit" disabled={pending}>
            {pending ? "Pending" : title}
        </button>
    );
}

const initialState = {
    message: "",
};

export default function CreateFundraiserForm() {
    const [state, formAction] = useFormState(createFundraiser, initialState);

    return (
        <form className={styles.formContainer} action={formAction}>
            <span className={styles.formTitle}>Create Fundraiser</span>
            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>Add a name</span>
                <input
                    className={styles.formInput}
                    placeholder="Name"
                    type="text"
                    name="name"
                />
                {state?.errors?.name && (
                    <p className={styles.formErrorText}>
                        {state?.errors?.name}
                    </p>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="target">
                <span className={styles.formLabelText}>Set a target</span>
                <input
                    className={styles.formInput}
                    placeholder="Target"
                    type="number"
                    min={1}
                    name="target"
                />
                {state?.errors?.target && (
                    <p className={styles.formErrorText}>
                        {state?.errors?.target}
                    </p>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="image">
                <span className={styles.formLabelText}>Add an image</span>
                <input
                    className={styles.formInput}
                    placeholder="Image"
                    type="url"
                    name="image"
                />
                {state?.errors?.image && (
                    <p className={styles.formErrorText}>
                        {state?.errors?.image[0]}
                    </p>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="category">
                <span className={styles.formLabelText}>Select a category</span>
                <input
                    className={styles.formInput}
                    placeholder="Category"
                    type="text"
                    name="category"
                />
                {state?.errors?.category && (
                    <p className={styles.formErrorText}>
                        {state?.errors?.category}
                    </p>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="description">
                <span className={styles.formLabelText}>Add a description</span>
                <input
                    className={styles.formInput}
                    placeholder="Description"
                    type="text"
                    name="description"
                />
                {state?.errors?.description && (
                    <p className={styles.formErrorText}>
                        {state?.errors?.description}
                    </p>
                )}
            </label>
            <div>
                <p className={styles.formErrorText}>{state?.message}</p>
                <SubmitButton title="Create Fundraiser" />
            </div>
        </form>
    );
}
