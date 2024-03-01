'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    updateFundraiserSchema,
    UpdateFundraiserSchemaType
} from './updateFundraiser.schema';

export default function UpdateFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateFundraiserSchemaType>({
        resolver: zodResolver(updateFundraiserSchema)
    });

    function handleUpdateFundraiser(values: UpdateFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleUpdateFundraiser(values);
            })}
        >
            <label htmlFor="name">
                Confirm:
                <input type="text" {...register('name')} />
                {errors?.name && <p>{errors.name.message}</p>}
            </label>
            <br />
            <button type="submit">Update Fundraiser</button>
        </form>
    );
}
