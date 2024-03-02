'use client';

import { Donation } from '@prisma/client';

export default function DonationCard(donation: Donation) {
    const { amount, message } = donation;

    return (
        <div>
            <p>{message}</p>
            <p>{amount}</p>
        </div>
    );
}
