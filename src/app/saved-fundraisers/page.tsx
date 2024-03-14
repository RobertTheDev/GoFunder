import { Metadata } from "next";
import { headers } from "next/headers";
import FundraiserCard from "../fundraisers/components/FundraiserCard";
import { ISavedFundraiser } from "../interfaces/SavedFundraiser";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Saved Fundraisers",
};

async function getSavedFundraisers() {
    const response = await fetch(
        `http://localhost:3000/api/saved-fundraisers`,
        {
            cache: "no-cache",
            headers: headers(),
        },
    );

    return response.json();
}

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default async function SavedFundraisersPage() {
    const savedFundraisers = await getSavedFundraisers();

    return (
        <>
            {savedFundraisers.data.map((savedFundraiser: ISavedFundraiser) => (
                <FundraiserCard
                    fundraiser={savedFundraiser.fundraiser}
                    key={savedFundraiser.id}
                />
            ))}
        </>
    );
}
