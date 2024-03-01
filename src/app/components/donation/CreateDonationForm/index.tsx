'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CreateDonationSchemaType,
    createDonationSchema
} from '@/app/lib/validations/donation/createDonation.schema';

export default function CreateDonationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<CreateDonationSchemaType>({
        resolver: zodResolver(createDonationSchema)
    });

    function handleCreateDonation(values: CreateDonationSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleCreateDonation(values);
            })}
        >
            <label htmlFor="amount">
                Amount:
                <input type="number" {...register('amount')} />
                {errors?.amount && <p>{errors.amount.message}</p>}
            </label>
            <br />
            <label htmlFor="annonymous">
                Annonymous:
                <input type="checkbox" {...register('annonymous')} />
                {errors?.annonymous && <p>{errors.annonymous.message}</p>}
            </label>
            <br />
            <label htmlFor="message">
                Message (Optional):
                <input type="text" {...register('message')} />
                {errors?.message && <p>{errors.message.message}</p>}
            </label>
            <br />
            <button type="submit">Create Donation</button>
            <br />
        </form>
    );
}
