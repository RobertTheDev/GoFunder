import { JSX } from 'react';
import { getClient } from '@/app/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { IFundraiser } from '@/app/interfaces/Fundraiser';
import FundraiserCard from '@/app/components/fundraiser/FundraiserCard';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraisers'
};

const GET_FUNDRAISERS = gql`
    query getFundraisers {
        fundraisers {
            id
            image
            name
            slug
            target
            totalDonations
            totalRaised
        }
    }
`;

export default async function FundraisersPage(): Promise<JSX.Element> {
    const client = getClient();

    const {
        loading,
        error,
        data: { fundraisers }
    } = await client.query({
        query: GET_FUNDRAISERS
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div className="fundraisers-page-container">
            <div className="fundraiser-card-grid">
                {fundraisers.map((fundraiser: IFundraiser) => (
                    <FundraiserCard {...fundraiser} key={fundraiser.id} />
                ))}
            </div>
        </div>
    );
}
