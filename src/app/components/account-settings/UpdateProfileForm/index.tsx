'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    updateProfileSchema,
    UpdateProfileSchemaType
} from './updateProfile.schema';

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
            className="account-settings-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCloseAcount(values);
            })}
        >
            <span className="account-settings-form-title">Update Profile</span>
            <label
                className="account-settings-form-label-container"
                htmlFor="name"
            >
                <span className="account-settings-form-label-text">Name</span>
                <input
                    className="account-settings-form-input"
                    type="text"
                    {...register('name')}
                />
                {errors?.name && (
                    <span className="account-settings-form-error-text">
                        {errors.name.message}
                    </span>
                )}
            </label>

            <label
                className="account-settings-form-label-container"
                htmlFor="annonymous"
            >
                <span className="account-settings-form-label-text">
                    Annonymous
                </span>
                <input
                    className="account-settings-form-checkbox"
                    type="checkbox"
                    {...register('annonymous')}
                />
                {errors?.annonymous && (
                    <span className="account-settings-form-error-text">
                        {errors.annonymous.message}
                    </span>
                )}
            </label>

            <button className="account-settings-form-button" type="submit">
                Update Profile
            </button>
        </form>
    );
}
