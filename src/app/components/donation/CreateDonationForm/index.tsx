'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CreateDonationSchemaType,
    createDonationSchema
} from './createDonation.schema';

export default function CreateDonationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateDonationSchemaType>({
        resolver: zodResolver(createDonationSchema)
    });

    function handleCreateDonation(values: CreateDonationSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="create-donation-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCreateDonation(values);
            })}
        >
            <span className="create-donation-form-title">Make A Donation</span>
            <label
                htmlFor="amount"
                className="create-donation-form-label-container"
            >
                <span className="create-donation-form-label-text">Amount</span>
                <input
                    className="create-donation-form-input"
                    type="number"
                    {...register('amount', { valueAsNumber: true })}
                />
                {errors?.amount && (
                    <span className="create-donation-form-error-text">
                        {errors.amount.message}
                    </span>
                )}
            </label>

            <label
                htmlFor="annonymous"
                className="create-donation-form-label-container"
            >
                <span className="create-donation-form-label-text">
                    Annonymous
                </span>
                <input
                    className="create-donation-form-checkbox"
                    type="checkbox"
                    {...register('annonymous')}
                />
                {errors?.annonymous && (
                    <span className="create-donation-form-error-text">
                        {errors.annonymous.message}
                    </span>
                )}
            </label>

            <label
                htmlFor="message"
                className="create-donation-form-label-container"
            >
                <span className="create-donation-form-label-text">
                    Message (Optional)
                </span>
                <input
                    className="create-donation-form-input"
                    type="text"
                    {...register('message')}
                />
                {errors?.message && (
                    <span className="create-donation-form-error-text">
                        {errors.message.message}
                    </span>
                )}
            </label>

            <button className="create-donation-form-button" type="submit">
                Create Donation
            </button>
        </form>
    );
}
