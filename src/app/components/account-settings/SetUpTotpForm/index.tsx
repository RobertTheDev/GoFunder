'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    setUpTotpCodeSchema,
    SetUpTotpCodeSchemaType
} from './setUpTotp.schema';

export default function SetUpTotpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SetUpTotpCodeSchemaType>({
        resolver: zodResolver(setUpTotpCodeSchema)
    });

    function handleCloseAcount(values: SetUpTotpCodeSchemaType) {
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
            <span className="account-settings-form-title">Set Up TOTP</span>
            <label
                className="account-settings-form-label-container"
                htmlFor="mfaSecret"
            >
                <span className="account-settings-form-label-text">
                    MFA Secret
                </span>
                <input
                    className="account-settings-form-input"
                    type="text"
                    {...register('mfaSecret')}
                />
                {errors?.mfaSecret && (
                    <span className="account-settings-form-error-text">
                        {errors.mfaSecret.message}
                    </span>
                )}
            </label>

            <button className="account-settings-form-button" type="submit">
                Set Up TOTP
            </button>
        </form>
    );
}
