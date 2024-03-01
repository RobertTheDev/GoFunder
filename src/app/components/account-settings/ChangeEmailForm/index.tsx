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
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleChangeEmail(values);
            })}
        >
            <label htmlFor="email">
                Email:
                <input type="email" {...register('email')} />
                {errors?.email && <p>{errors.email.message}</p>}
            </label>
            <br />
            <label htmlFor="password">
                Email:
                <input type="password" {...register('password')} />
                {errors?.password && <p>{errors.password.message}</p>}
            </label>
            <br />
            <button type="submit">Change Email</button>
        </form>
    );
}
