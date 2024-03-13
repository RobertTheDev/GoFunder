// PURPOSE: This page fetches and displays the donations by the user.

// The relevant imports required for the page.

import { Metadata } from "next";
import DonationCardsLayout from "@/app/modules/donation/layouts/DonationCardsLayout";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "My Donations",
};

// The handler injects and maps donation cards with fetched user donations data.
export default async function MyDonationsPage() {
    // if (error) return <p>There was an error</p>;
    // if (loading) return <p>Loading...</p>;

    return (
        <DonationCardsLayout>
            {/* {donations.map((donation: IDonation) => (
                <DonationCard donation={donation} key={donation.id} />
            ))} */}
            <p>Donations</p>
        </DonationCardsLayout>
    );
}
