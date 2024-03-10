// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { Metadata } from "next";
import FundraiserCardsLayout from "@/app/modules/fundraiser/layouts/FundraiserCardsLayout";
import gql from "graphql-tag";
import getClient from "../lib/apollo/apolloClient";
import FundraiserCard from "../modules/fundraiser/components/FundraiserCard";
import { ISavedFundraiser } from "../interfaces/SavedFundraiser";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Saved Fundraisers",
};

const GET_SAVED_FUNDRAISERS = gql`
    query getSavedFundraisers {
        savedFundraisers {
            id
            fundraiser {
                id
                image
                name
                target
                totalDonations
                totalRaised
            }
        }
    }
`;

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default async function SavedFundraisersPage() {
    const client = getClient();

    const {
        loading,
        error,
        data: { savedFundraisers },
    } = await client.query({
        query: GET_SAVED_FUNDRAISERS,
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <FundraiserCardsLayout>
            {savedFundraisers.map((savedFundraiser: ISavedFundraiser) => (
                <FundraiserCard
                    fundraiser={savedFundraiser.fundraiser}
                    key={savedFundraiser.id}
                />
            ))}
        </FundraiserCardsLayout>
    );
}
