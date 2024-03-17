import FundraiserOverview from "@/app/fundraisers/components/FundraiserOverview";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraiser Overview",
};

// This handler displays the fetched performance data for a fundraiser.
export default function FundraiserAdminOverviewPage() {
    return <FundraiserOverview />;
}
