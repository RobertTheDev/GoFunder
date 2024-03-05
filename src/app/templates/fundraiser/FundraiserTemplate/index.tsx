'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import DonationCard from '@/app/components/donation/DonationCard';
import { IFundraiser } from '@/app/interfaces/Fundraiser';

export default function FundraiserTemplate(params: {
    fundraiser: IFundraiser;
}) {
    const { fundraiser } = params;

    const router = useRouter();

    const {
        name,
        category,
        description,
        deadlineDate,
        createdAt,
        image,
        slug,
        target,
        totalDonations,
        totalRaised,
        donations
    } = fundraiser;

    return (
        <div>
            <Image src={image} alt={name} height={400} width={400} />

            <p>{name}</p>
            <p>{category}</p>
            <p>{format(new Date(createdAt), 'yyyy')}</p>
            {deadlineDate && <p>{format(new Date(deadlineDate), 'yyyy')}</p>}

            <p>{target}</p>
            <p> {totalDonations}</p>
            <p>{totalRaised}</p>

            <p>{description}</p>
            <button
                type="button"
                onClick={() => router.push(`/fundraisers/${slug}/donate`)}
            >
                Donate
            </button>
            <button type="button" onClick={() => {}}>
                Save Fundraiser
            </button>

            {donations.map(donation => (
                <DonationCard key={donation.id} donation={donation} />
            ))}
        </div>
    );
}
