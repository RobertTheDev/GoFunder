// PURPOSE: This page fecthes and displays donations for a fundraiser.

// The relevant imports required for the page.
import { getClient } from '@/app/lib/apollo/apolloClient';
import FundraiserAdminLayout from '@/app/modules/fundraiser/layouts/FundraiserAdminLayout';
import gql from 'graphql-tag';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Donations'
};

const GET_DONATIONS_BY_FUNDRAISER = gql`
    query DonationsByFundraiser {
        donationsByFundraiser {
            amount
            id
        }
    }
`;

// This handler displays the fetched fundraiser donations data as donation cards.
// This handler wraps the page with the fundraiser admin page layout template.
export default async function FundraiserDonationsPage() {
    const client = getClient();

    const {
        loading,
        error,
        data: { donationsByFundraiser: donations }
    } = await client.query({
        query: GET_DONATIONS_BY_FUNDRAISER
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <FundraiserAdminLayout>
            <h1>Fundraiser Donations Page</h1>
            <p>{JSON.stringify(donations)}</p>
        </FundraiserAdminLayout>
    );
}
