'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CreateFundraiserSchemaType,
    createFundraiserSchema
} from './createFundraiser.schema';

export default function CreateFundraiserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateFundraiserSchemaType>({
        resolver: zodResolver(createFundraiserSchema)
    });

    function handleCreateFundraiser(values: CreateFundraiserSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCreateFundraiser(values);
            })}
        >
            <label htmlFor="name">
                Confirm:
                <input type="text" {...register('name')} />
                {errors?.name && <p>{errors.name.message}</p>}
            </label>
            <br />
            <button type="submit">Create Fundraiser</button>
        </form>
    );
}
