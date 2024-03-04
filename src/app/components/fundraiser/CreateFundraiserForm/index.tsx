'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CreateFundraiserSchemaType,
    createFundraiserSchema
} from './createFundraiser.schema';

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
            className="create-fundraiser-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCreateFundraiser(values);
            })}
        >
            <span className="create-fundraiser-form-title">
                Create Fundraiser
            </span>
            <label
                className="create-fundraiser-form-label-container"
                htmlFor="name"
            >
                <span className="create-fundraiser-form-label-text">
                    Confirm
                </span>
                <input
                    className="create-fundraiser-form-input"
                    type="text"
                    {...register('name')}
                />
                {errors?.name && (
                    <p className="create-fundraiser-form-error-text">
                        {errors.name.message}
                    </p>
                )}
            </label>
            <button className="create-fundraiser-form-button" type="submit">
                <div className="loader" />
                <span>Create Fundraiser</span>
            </button>
        </form>
    );
}
