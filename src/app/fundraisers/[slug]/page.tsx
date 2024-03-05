// PURPOSE: This page fecthes and displays data for a queried fundraiser using its slug.

// The relevant imports required for the page.
import { JSX } from 'react';
import FundraiserTemplate from '@/app/templates/fundraiser/FundraiserTemplate';
import { Metadata } from 'next';
import { getClient } from '@/app/lib/apollo/apolloClient';
import { gql } from '@apollo/client';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser'
};

const GET_FUNDRAISERS = gql`
    query FundraiserBySlugQuery($slug: String) {
        fundraiserBySlug(slug: $slug) {
            id
            name
            image
            donations {
                amount
                id
                message
                user {
                    id
                    image
                    name
                    email
                    username
                }
            }
        }
    }
`;

// This handler fetched fundraiser data from the API and inject it into the fundraiser template.
export default async function FundraiserPage({
    params
}: {
    params: { slug: string };
}): Promise<JSX.Element> {
    const client = getClient();

    const { slug } = params;

    const {
        loading,
        error,
        data: { fundraiserBySlug: fundraiser }
    } = await client.query({
        query: GET_FUNDRAISERS,
        variables: { slug }
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;
    if (!fundraiser) return <p>Not Found</p>;
    return <FundraiserTemplate fundraiser={fundraiser} />;
}
