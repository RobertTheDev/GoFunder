'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    SignInSchemaType,
    signInSchema
} from '@/app/lib/validations/auth/signIn.schema';

export default function SignInForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(signInSchema)
    });

    function handleSignIn(values: SignInSchemaType) {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values));
    }

    return (
        <form
            onSubmit={handleSubmit(values => {
                // eslint-disable-next-line no-alert
                handleSignIn(values);
            })}
        >
            <label htmlFor="email">
                Email:
                <input type="email" {...register('email')} />
                {errors?.email && <p>{errors.email.message}</p>}
            </label>
            <br />
            <button type="submit">Sign In</button>
            <br />
            <button type="submit">Sign In With Facebook</button>
            <br />
            <button type="submit">Sign In With Github</button>
            <br />
            <button type="submit">Sign In With Google</button>
            <br />
        </form>
    );
}
