'use client';

import { Fundraiser } from '@prisma/client';

export default function FundraiserTemplate(params: { fundraiser: Fundraiser }) {
    const { fundraiser } = params;

    return (
        <div>
            <p>{fundraiser.name}</p>
            <p>{fundraiser.image}</p>
            <p>{JSON.stringify(fundraiser)}</p>
            {/* <button
                type="button"
                onClick={() => router.push(`/fundraisers/${route.slug}/donate`)}
            >
                Donate
            </button> */}
        </div>
    );
}
