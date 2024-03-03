'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    closeAccountSchema,
    CloseAccountSchemaType
} from './closeAccount.schema';

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
            className="account-settings-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCloseAcount(values);
            })}
        >
            <span className="account-settings-form-title">Close Account</span>
            <label
                className="account-settings-form-label-container"
                htmlFor="confirm"
            >
                <span className="account-settings-form-label-text">
                    Confirm
                </span>
                <input
                    className="account-settings-form-input"
                    type="text"
                    {...register('confirm')}
                />
                {errors?.confirm && (
                    <span className="account-settings-form-error-text">
                        {errors.confirm.message}
                    </span>
                )}
            </label>

            <label
                className="account-settings-form-label-container"
                htmlFor="password"
            >
                <span className="account-settings-form-label-text">Email</span>
                <input
                    className="account-settings-form-input"
                    type="password"
                    {...register('password')}
                />
                {errors?.password && (
                    <span className="account-settings-form-error-text">
                        {errors.password.message}
                    </span>
                )}
            </label>

            <button className="account-settings-form-button" type="submit">
                Close Account
            </button>
        </form>
    );
}
