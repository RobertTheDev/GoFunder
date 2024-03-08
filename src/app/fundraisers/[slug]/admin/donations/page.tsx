// PURPOSE: This page fecthes and displays donations for a fundraiser.

// The relevant imports required for the page.
import { JSX } from 'react';
import FundraiserAdminLayout from '@/app/modules/fundraiser/layouts/FundraiserAdminLayout';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Donations'
};

// This handler displays the fetched fundraiser donations data as donation cards.
// This handler wraps the page with the fundraiser admin page layout template.
export default function FundraiserDonationsPage(): JSX.Element {
    return (
        <FundraiserAdminLayout>
            <h1>Fundraiser Donations Page</h1>
        </FundraiserAdminLayout>
    );
}
