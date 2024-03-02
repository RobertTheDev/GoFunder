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
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCloseAcount(values);
            })}
        >
            <label htmlFor="mfaSecret">
                MFA Secret:
                <input type="text" {...register('mfaSecret')} />
                {errors?.mfaSecret && <p>{errors.mfaSecret.message}</p>}
            </label>
            <br />

            <button type="submit">Set Up TOTP</button>
        </form>
    );
}
