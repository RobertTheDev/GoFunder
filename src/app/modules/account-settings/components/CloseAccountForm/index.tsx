'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    closeAccountSchema,
    CloseAccountSchemaType
} from './closeAccount.schema';
import styles from './styles.module.css';

export default function CloseAccountForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CloseAccountSchemaType>({
        resolver: zodResolver(closeAccountSchema)
    });

    function handleCloseAcount(values: CloseAccountSchemaType) {
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
            <span className={styles.formTitle}>Close Account</span>
            <label className={styles.formLabelContainer} htmlFor="confirm">
                <span className={styles.formLabelText}>Confirm</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register('confirm')}
                />
                {errors?.confirm && (
                    <span className={styles.formErrorText}>
                        {errors.confirm.message}
                    </span>
                )}
            </label>

            <label className={styles.formLabelContainer} htmlFor="password">
                <span className={styles.formLabelText}>Email</span>
                <input
                    className={styles.formInput}
                    type="password"
                    {...register('password')}
                />
                {errors?.password && (
                    <span className={styles.formErrorText}>
                        {errors.password.message}
                    </span>
                )}
            </label>

            <button className={styles.formButton} type="submit">
                Close Account
            </button>
        </form>
    );
}