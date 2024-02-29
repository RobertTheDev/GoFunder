'use client';

import { Fundraiser } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function FundraiserCard(fundraiser: Fundraiser) {
    const { id, image, name } = fundraiser;

    return (
        <Link href={`fundraisers/${id}`}>
            <div>
                <Image src={image} alt={name} height={200} width={200} />
                <p>{name}</p>
            </div>
        </Link>
    );
}
