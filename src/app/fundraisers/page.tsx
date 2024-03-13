import { Metadata } from "next";
import FundraiserCardsLayout from "@/app/modules/fundraiser/layouts/FundraiserCardsLayout";
import { IFundraiser } from "../interfaces/Fundraiser";
import FundraiserCard from "../modules/fundraiser/components/FundraiserCard";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraisers",
};

export default async function FundraisersPage() {
    const res = await fetch(`http://localhost:3000/api/fundraisers`, {
        cache: "no-cache",
    });

    const fundraisers = await res.json();

    return (
        <FundraiserCardsLayout>
            <p>Fundraisers</p>

            {fundraisers.data.map((fundraiser: IFundraiser) => (
                <FundraiserCard fundraiser={fundraiser} key={fundraiser.id} />
            ))}
        </FundraiserCardsLayout>
    );
}
