// PURPOSE: This page displays a form for a user to donate to a fundraiser.

// The relevant imports required for the page.
import { JSX } from 'react';
import CreateDonationForm from '@/app/components/donation/CreateDonationForm';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Make A Donation'
};

// This handler returns a form for a user to make a donation to a fundraiser.
export default function FundraiserDonationPage(): JSX.Element {
    return <CreateDonationForm />;
}
