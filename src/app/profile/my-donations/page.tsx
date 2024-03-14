// PURPOSE: This page fetches and displays the donations by the user.

// The relevant imports required for the page.

import { Metadata } from "next";
import DonationCardsLayout from "@/app/modules/donation/layouts/DonationCardsLayout";
import { headers } from "next/headers";
import { IDonation } from "../../interfaces/Donation";
import DonationCard from "../../components/donation/DonationCard";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "My Donations",
};

// The handler injects and maps donation cards with fetched user donations data.
export default async function MyDonationsPage() {
    const res = await fetch(
        `http://localhost:3000/api/donations/current-user`,
        {
            cache: "no-cache",
            headers: headers(),
        },
    );

    const donations = await res.json();

    return (
        <DonationCardsLayout>
            {donations.data.map((donation: IDonation) => (
                <DonationCard donation={donation} key={donation.id} />
            ))}
            <p>Donations</p>
            {/* <p>{JSON.stringify(donations.data)}</p> */}
        </DonationCardsLayout>
    );
}
