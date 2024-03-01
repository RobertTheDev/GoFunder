'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    deleteFundraiserSchema,
    DeleteFundraiserSchemaType
} from './deleteFundraiser.schema';

export default function DeleteFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DeleteFundraiserSchemaType>({
        resolver: zodResolver(deleteFundraiserSchema)
    });

    function handleDeleteFundraiser(values: DeleteFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleDeleteFundraiser(values);
            })}
        >
            <label htmlFor="confirm">
                Email:
                <input type="text" {...register('confirm')} />
                {errors?.confirm && <p>{errors.confirm.message}</p>}
            </label>
            <br />
            <button type="submit">Delete Fundraiser</button>
        </form>
    );
}
