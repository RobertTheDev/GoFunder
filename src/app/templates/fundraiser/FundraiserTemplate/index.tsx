'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import DonationCard from '@/app/components/donation/DonationCard';
import { IFundraiser } from '@/app/interfaces/Fundraiser';
import { FaHandHoldingHeart, FaHeart } from 'react-icons/fa';

export default function FundraiserTemplate(params: {
    fundraiser: IFundraiser;
}) {
    const { fundraiser } = params;

    const router = useRouter();

    const {
        name,
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
        <div className="fundraiser-page-container">
            <div className="fundraiser-page-image-container">
                <Image src={image} alt={name} fill />
            </div>

            <p className="fundraiser-page-title">{name}</p>
            <p>{format(new Date(createdAt), 'yyyy')}</p>
            {deadlineDate && <p>{format(new Date(deadlineDate), 'yyyy')}</p>}

            <div className="fundraiser-page-button-group">
                <button
                    className="fundraiser-page-button-save"
                    type="button"
                    onClick={() => {}}
                >
                    <FaHeart /> Save
                </button>
                <button
                    className="fundraiser-page-button-donate"
                    type="button"
                    onClick={() => router.push(`/fundraisers/${slug}/donate`)}
                >
                    <FaHandHoldingHeart /> Donate
                </button>
            </div>
            <p>{target}</p>
            <p> {totalDonations}</p>
            <p>{totalRaised}</p>

            <div className="fundraiser-page-description-container">
                <p className="fundraiser-page-description-title">
                    {description}
                </p>
            </div>

            {donations.map(donation => (
                <DonationCard key={donation.id} donation={donation} />
            ))}
        </div>
    );
}
