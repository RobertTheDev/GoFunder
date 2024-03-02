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
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleVerifyTotp(values);
            })}
        >
            <label htmlFor="code">
                Code:
                <input type="text" {...register('code')} />
                {errors?.code && <p>{errors.code.message}</p>}
            </label>
            <br />
            <button type="submit">Verify TOTP</button>
        </form>
    );
}
