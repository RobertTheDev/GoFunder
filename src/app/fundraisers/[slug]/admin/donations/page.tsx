import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraiser Donations",
};

// This handler displays the fetched fundraiser donations data as donation cards.
export default async function FundraiserDonationsPage() {
    return <h1>Fundraiser Donations Page</h1>;
}
