import { Metadata } from "next";
import FundraiserOverview from "@/app/fundraisers/components/FundraiserOverview";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraiser Overview",
};

// This handler displays the fetched performance data for a fundraiser.
export default function FundraiserAdminOverviewPage() {
    return <FundraiserOverview />;
}
