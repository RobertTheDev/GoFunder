'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    deleteFundraiserSchema,
    DeleteFundraiserSchemaType
} from './deleteFundraiser.schema';

export default function DeleteFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DeleteFundraiserSchemaType>({
        resolver: zodResolver(deleteFundraiserSchema)
    });

    function handleDeleteFundraiser(values: DeleteFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="fundraiser-admin-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleDeleteFundraiser(values);
            })}
        >
            <span className="fundraiser-admin-form-title">
                Delete Fundraiser
            </span>
            <label
                htmlFor="email"
                className="fundraiser-admin-form-label-container"
            >
                <span className="fundraiser-admin-form-label-text">
                    Confirm
                </span>
                <input
                    className="fundraiser-admin-form-input"
                    type="text"
                    {...register('confirm')}
                />
                {errors?.confirm && (
                    <p className="fundraiser-admin-form-error-text">
                        {errors.confirm.message}
                    </p>
                )}
            </label>

            <button className="fundraiser-admin-form-button" type="submit">
                Delete Fundraiser
            </button>
        </form>
    );
}
