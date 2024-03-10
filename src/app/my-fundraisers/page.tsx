// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { Metadata } from "next";
import FundraiserCardsLayout from "@/app/modules/fundraiser/layouts/FundraiserCardsLayout";
import gql from "graphql-tag";
import { getClient } from "../lib/apollo/apolloClient";
import FundraiserCard from "../modules/fundraiser/components/FundraiserCard";
import { IFundraiser } from "../interfaces/Fundraiser";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "My Fundraisers",
};

const GET_OWNED_FUNDRAISERS = gql`
    query getOwnedFundraisers {
        ownedFundraisers {
            id
            image
            name
            target
            totalDonations
            totalRaised
        }
    }
`;

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default async function MyFundraisersPage() {
    const client = getClient();

    const {
        loading,
        error,
        data: { ownedFundraisers },
    } = await client.query({
        query: GET_OWNED_FUNDRAISERS,
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <FundraiserCardsLayout>
            {ownedFundraisers.map((ownedFundraiser: IFundraiser) => (
                <FundraiserCard
                    fundraiser={ownedFundraiser}
                    key={ownedFundraiser.id}
                />
            ))}
        </FundraiserCardsLayout>
    );
}
