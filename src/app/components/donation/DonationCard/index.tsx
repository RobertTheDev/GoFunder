'use client';

import { IDonation } from '@/app/interfaces/Donation';
import Image from 'next/image';

export default function DonationCard(params: { donation: IDonation }) {
    const {
        donation: { amount, message, user }
    } = params;

    return (
        <div>
            <p>{message}</p>
            <p>£{amount.toLocaleString()}</p>

            {user.image ? (
                <Image src={user.image} alt="dd" height={120} width={120} />
            ) : (
                <Image
                    src="/defaultAvatar.png"
                    alt="dd"
                    height={120}
                    width={120}
                />
            )}
            <p>{user.username}</p>
        </div>
    );
}
