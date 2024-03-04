// The relevant imports required for the page.
import { JSX } from 'react';
import CreateDonationForm from '@/app/components/donation/CreateDonationForm';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Make A Donation'
};

export default function FundraiserDonationPage(): JSX.Element {
    return <CreateDonationForm />;
}
