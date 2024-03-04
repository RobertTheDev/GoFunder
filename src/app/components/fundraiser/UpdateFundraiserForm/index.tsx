'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    updateFundraiserSchema,
    UpdateFundraiserSchemaType
} from './updateFundraiser.schema';

export default function UpdateFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateFundraiserSchemaType>({
        resolver: zodResolver(updateFundraiserSchema)
    });

    function handleUpdateFundraiser(values: UpdateFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="fundraiser-admin-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleUpdateFundraiser(values);
            })}
        >
            <span className="fundraiser-admin-form-title">
                Update Fundraiser
            </span>
            <label
                htmlFor="name"
                className="fundraiser-admin-form-label-container"
            >
                <span className="fundraiser-admin-form-label-text">
                    Confirm
                </span>
                <input
                    className="fundraiser-admin-form-input"
                    type="text"
                    {...register('name')}
                />
                {errors?.name && (
                    <p className="fundraiser-admin-form-error-text">
                        {errors.name.message}
                    </p>
                )}
            </label>

            <button className="fundraiser-admin-form-button" type="submit">
                Update Fundraiser
            </button>
        </form>
    );
}
