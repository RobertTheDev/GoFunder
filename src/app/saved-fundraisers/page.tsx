// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { Metadata } from "next";
import FundraiserCardsLayout from "@/app/modules/fundraiser/layouts/FundraiserCardsLayout";
import { headers } from "next/headers";
import FundraiserCard from "../modules/fundraiser/components/FundraiserCard";
import { ISavedFundraiser } from "../interfaces/SavedFundraiser";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Saved Fundraisers",
};

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default async function SavedFundraisersPage() {
    const res = await fetch(`http://localhost:3000/api/saved-fundraisers`, {
        cache: "no-cache",
        headers: headers(),
    });

    const savedFundraisers = await res.json();

    return (
        <FundraiserCardsLayout>
            <p>Saved Fundraisers</p>
            {savedFundraisers.data.map((savedFundraiser: ISavedFundraiser) => (
                <FundraiserCard
                    fundraiser={savedFundraiser.fundraiser}
                    key={savedFundraiser.id}
                />
            ))}
        </FundraiserCardsLayout>
    );
}
