'use client';

import { Fundraiser } from '@prisma/client';
import Image from 'next/image';

export default function FundraiserTemplate(fundraiser: Fundraiser) {
    const { image, name } = fundraiser;

    return (
        <div>
            <Image src={image} alt={name} height={200} width={200} />
            <p>{name}</p>
        </div>
    );
}
