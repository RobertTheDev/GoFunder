import { getClient } from '@/app/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { IFundraiser } from '@/app/interfaces/Fundraiser';
import FundraiserCard from '@/app/modules/fundraiser/components/FundraiserCard';
import { Metadata } from 'next';
import FundraiserCardsLayout from '@/app/modules/fundraiser/layouts/FundraiserCardsLayout';

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

export default async function FundraisersPage() {
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
        <FundraiserCardsLayout>
            {fundraisers.map((fundraiser: IFundraiser) => (
                <FundraiserCard fundraiser={fundraiser} key={fundraiser.id} />
            ))}
        </FundraiserCardsLayout>
    );
}
