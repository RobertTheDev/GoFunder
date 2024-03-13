// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { Metadata } from "next";
import FundraiserCardsLayout from "@/app/modules/fundraiser/layouts/FundraiserCardsLayout";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "My Fundraisers",
};

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default async function MyFundraisersPage() {
    // if (error) return <p>There was an error</p>;
    // if (loading) return <p>Loading...</p>;

    return (
        <FundraiserCardsLayout>
            <p>My Fundraisers</p>
            {/* {ownedFundraisers.map((ownedFundraiser: IFundraiser) => (
                <FundraiserCard
                    fundraiser={ownedFundraiser}
                    key={ownedFundraiser.id}
                />
            ))} */}
        </FundraiserCardsLayout>
    );
}
