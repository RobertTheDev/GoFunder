'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEmailSchemaType, changeEmailSchema } from './changeEmail.schema';

export default function ChangeEmailForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ChangeEmailSchemaType>({
        resolver: zodResolver(changeEmailSchema)
    });

    function handleChangeEmail(values: ChangeEmailSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="account-settings-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleChangeEmail(values);
            })}
        >
            <span className="account-settings-form-title">Change Email</span>
            <label
                htmlFor="email"
                className="account-settings-form-label-container"
            >
                <span className="account-settings-form-label-text">Email</span>
                <input
                    className="account-settings-form-input"
                    type="email"
                    {...register('email')}
                />
                {errors?.email?.message && (
                    <span className="account-settings-form-error-text">
                        {errors.email.message}
                    </span>
                )}
            </label>

            <label
                htmlFor="password"
                className="account-settings-form-label-container"
            >
                <span className="account-settings-form-label-text">
                    Password
                </span>
                <input
                    className="account-settings-form-input"
                    type="password"
                    {...register('password')}
                />
                {errors?.password?.message && (
                    <span className="account-settings-form-error-text">
                        {errors.password.message}
                    </span>
                )}
            </label>

            <button className="account-settings-form-button" type="submit">
                Change Email
            </button>
        </form>
    );
}
