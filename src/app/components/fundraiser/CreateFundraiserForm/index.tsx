'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CreateFundraiserSchemaType,
    createFundraiserSchema
} from './createFundraiser.schema';
import styles from './styles.module.css';

export default function CreateFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateFundraiserSchemaType>({
        resolver: zodResolver(createFundraiserSchema)
    });

    function handleCreateFundraiser(values: CreateFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className={styles.formContainer}
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCreateFundraiser(values);
            })}
        >
            <span className={styles.formTitle}>Create Fundraiser</span>
            <label className={styles.formLabelContainer} htmlFor="name">
                <span className={styles.formLabelText}>Confirm</span>
                <input
                    className={styles.formInput}
                    type="text"
                    {...register('name')}
                />
                {errors?.name && (
                    <p className={styles.formErrorText}>
                        {errors.name.message}
                    </p>
                )}
            </label>
            <button className={styles.formButton} type="submit">
                <div className="loader" />
                <span>Create Fundraiser</span>
            </button>
        </form>
    );
}
