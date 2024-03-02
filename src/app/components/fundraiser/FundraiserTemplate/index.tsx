'use client';

import { useParams, useRouter } from 'next/navigation';

export default function FundraiserTemplate() {
    const router = useRouter();

    const route = useParams();

    return (
        <div>
            <button
                type="button"
                onClick={() => router.push(`/fundraisers/${route.slug}/donate`)}
            >
                Donate
            </button>
        </div>
    );
}
