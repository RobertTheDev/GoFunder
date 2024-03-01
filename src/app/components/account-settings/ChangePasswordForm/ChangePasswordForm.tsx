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
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleChangePassword(values);
            })}
        >
            {' '}
            <label htmlFor="newPassword">
                Email:
                <input type="password" {...register('newPassword')} />
                {errors?.newPassword && <p>{errors.newPassword.message}</p>}
            </label>
            <br />
            <label htmlFor="currentPassword">
                Email:
                <input type="password" {...register('currentPassword')} />
                {errors?.currentPassword && (
                    <p>{errors.currentPassword.message}</p>
                )}
            </label>
            <br />
            <button type="submit">Change Password</button>
        </form>
    );
}
