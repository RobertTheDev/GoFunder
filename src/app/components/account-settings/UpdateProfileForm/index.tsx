'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    updateProfileSchema,
    UpdateProfileSchemaType
} from './updateProfile.schema';

export default function UpdateProfileForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateProfileSchemaType>({
        resolver: zodResolver(updateProfileSchema)
    });

    function handleCloseAcount(values: UpdateProfileSchemaType) {
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
            <label htmlFor="name">
                Name:
                <input type="text" {...register('name')} />
                {errors?.name && <p>{errors.name.message}</p>}
            </label>
            <br />
            <label htmlFor="annonymous">
                Annonymous:
                <input type="checkbox" {...register('annonymous')} />
                {errors?.annonymous && <p>{errors.annonymous.message}</p>}
            </label>
            <br />
            <button type="submit">Update Profile</button>
        </form>
    );
}
