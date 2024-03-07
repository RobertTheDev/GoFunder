'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    updateProfileSchema,
    UpdateProfileSchemaType
} from './updateProfile.schema';
import styles from './styles.module.css';

export default function UpdateProfileForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateProfileSchemaType>({
        resolver: zodResolver(updateProfileSchema)
    });

    function handleCloseAcount(values: UpdateProfileSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCloseAcount(values);
            })}
        >
            <span className={styles.formTitle}>Update Profile</span>
            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>Name</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register('name')}
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
                    {...register('annonymous')}
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
