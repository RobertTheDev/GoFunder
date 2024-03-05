// PURPOSE: This page fetches and displays the fundraisers owned by the user.

// The relevant imports required for the page.
import { JSX } from 'react';
import { getClient } from '@/app/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { Metadata } from 'next';
import FundraiserCard from '../components/fundraiser/FundraiserCard';
import { IFundraiser } from '../interfaces/Fundraiser';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'My Fundraisers'
};

const GET_FUNDRAISERS = gql`
    query getFundraisers {
        fundraisers {
            id
            image
            name
        }
    }
`;

// The handler injects and maps fundraiser cards with fetched owned fundraisers data.
export default async function MyFundraisersPage(): Promise<JSX.Element> {
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
