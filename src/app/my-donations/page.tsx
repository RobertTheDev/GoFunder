// PURPOSE: This page fetches and displays the donations by the user.

// The relevant imports required for the page.
import getClient from "@/app/lib/apollo/apolloClient";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import DonationCardsLayout from "@/app/modules/donation/layouts/DonationCardsLayout";
import DonationCard from "../modules/donation/components/DonationCard";
import { IDonation } from "../interfaces/Donation";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "My Donations",
};

const GET_DONATIONS_BY_CURRENT_USER = gql`
    query DonationsByFundraiser {
        donationsByCurrentUser {
            id
            createdAt
            amount
            message
            fundraiser {
                id
                createdAt
                deadlineDate
                image
                name
                slug
                target
                totalDonations
                totalRaised
            }
        }
    }
`;

// The handler injects and maps donation cards with fetched user donations data.
export default async function MyDonationsPage() {
    const client = getClient();

    const {
        loading,
        error,
        data: { donationsByCurrentUser: donations },
    } = await client.query({
        query: GET_DONATIONS_BY_CURRENT_USER,
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <DonationCardsLayout>
            {donations.map((donation: IDonation) => (
                <DonationCard donation={donation} key={donation.id} />
            ))}
        </DonationCardsLayout>
    );
}
