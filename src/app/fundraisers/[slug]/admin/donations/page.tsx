// The relevant imports required for the page.
import { JSX } from 'react';
import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Donations'
};

export default function FundraiserDonationsPage(): JSX.Element {
    return (
        <FundraiserAdminPageTemplate>
            <h1>Fundraiser Donations Page</h1>
        </FundraiserAdminPageTemplate>
    );
}
