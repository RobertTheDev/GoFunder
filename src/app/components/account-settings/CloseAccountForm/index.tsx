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
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCloseAcount(values);
            })}
        >
            <label htmlFor="confirm">
                Confirm:
                <input type="text" {...register('confirm')} />
                {errors?.confirm && <p>{errors.confirm.message}</p>}
            </label>
            <br />
            <label htmlFor="password">
                Email:
                <input type="password" {...register('password')} />
                {errors?.password && <p>{errors.password.message}</p>}
            </label>
            <br />
            <button type="submit">Close Account</button>
        </form>
    );
}
