'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    verifyTotpCodeSchema,
    type VerifyTotpCodeSchemaType
} from './verifyTotpCode.schema';

export default function VerifyTotpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<VerifyTotpCodeSchemaType>({
        resolver: zodResolver(verifyTotpCodeSchema)
    });

    function handleVerifyTotp(values: VerifyTotpCodeSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            className="account-settings-form-container"
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleVerifyTotp(values);
            })}
        >
            <span className="account-settings-form-title">Verify TOTP</span>
            <label
                className="account-settings-form-label-container"
                htmlFor="code"
            >
                <span className="account-settings-form-label-text">Code</span>
                <input
                    className="account-settings-form-input"
                    type="text"
                    {...register('code')}
                />
                {errors?.code && (
                    <span className="account-settings-form-error-text">
                        {errors.code.message}
                    </span>
                )}
            </label>
            <button className="account-settings-form-button" type="submit">
                Verify TOTP
            </button>
        </form>
    );
}
