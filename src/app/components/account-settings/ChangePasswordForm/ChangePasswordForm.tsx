'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    ChangePasswordSchemaType,
    changePasswordSchema
} from './changePassword.schema';

export default function ChangePasswordForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ChangePasswordSchemaType>({
        resolver: zodResolver(changePasswordSchema)
    });

    function handleChangePassword(values: ChangePasswordSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="account-settings-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleChangePassword(values);
            })}
        >
            <span className="account-settings-form-title">Change Password</span>
            <label
                className="account-settings-form-label-container"
                htmlFor="newPassword"
            >
                <span className="account-settings-form-label-text">Email</span>
                <input
                    className="account-settings-form-input"
                    type="password"
                    {...register('newPassword')}
                />
                {errors?.newPassword && (
                    <span className="account-settings-form-error-text">
                        {errors.newPassword.message}
                    </span>
                )}
            </label>

            <label
                className="account-settings-form-label-container"
                htmlFor="currentPassword"
            >
                <span className="account-settings-form-label-text">Email</span>
                <input
                    className="account-settings-form-input"
                    type="password"
                    {...register('currentPassword')}
                />
                {errors?.currentPassword && (
                    <span className="account-settings-form-error-text">
                        {errors.currentPassword.message}
                    </span>
                )}
            </label>

            <button className="account-settings-form-button" type="submit">
                Change Password
            </button>
        </form>
    );
}
