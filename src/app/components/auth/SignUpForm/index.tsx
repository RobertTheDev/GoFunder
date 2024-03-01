'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    SignUpSchemaType,
    signUpSchema
} from '@/app/lib/validations/auth/signUp.schema';

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema)
    });

    function handleSignUp(values: SignUpSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleSignUp(values);
            })}
        >
            <label htmlFor="email">
                Email:
                <input type="email" {...register('email')} />
                {errors?.email && <p>{errors.email.message}</p>}
            </label>
            <br />
            <label htmlFor="name">
                Name:
                <input type="text" {...register('name')} />
                {errors?.name && <p>{errors.name.message}</p>}
            </label>
            <br />
            <button type="submit">Sign Up</button>
            <br />
            <button type="submit">Sign Up With Facebook</button>
            <br />
            <button type="submit">Sign Up With Github</button>
            <br />
            <button type="submit">Sign Up With Google</button>
            <br />
        </form>
    );
}
