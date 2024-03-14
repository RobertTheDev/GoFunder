// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { Metadata } from "next";
import FundraiserCardsLayout from "@/app/modules/fundraiser/layouts/FundraiserCardsLayout";
import { headers } from "next/headers";
import { IFundraiser } from "../interfaces/Fundraiser";
import FundraiserCard from "../modules/fundraiser/components/FundraiserCard";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "My Fundraisers",
};

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default async function MyFundraisersPage() {
    const res = await fetch(
        `http://localhost:3000/api/fundraisers/owned-fundraisers`,
        {
            cache: "no-cache",
            headers: headers(),
        },
    );

    const ownedFundraisers = await res.json();

    return (
        <FundraiserCardsLayout>
            <p>My Fundraisers</p>
            {ownedFundraisers.data.map((ownedFundraiser: IFundraiser) => (
                <FundraiserCard
                    fundraiser={ownedFundraiser}
                    key={ownedFundraiser.id}
                />
            ))}
        </FundraiserCardsLayout>
    );
}
