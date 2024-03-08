// PURPOSE: This page displays a fundraiser's performance statistics.

// The relevant imports required for the page.
import { JSX } from 'react';
import FundraiserAdminPageTemplate from '@/app/modules/fundraiser/layouts/FundraiserAdminLayout';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Overview'
};

// This handler displays the fetched performance data for a fundraiser.
// This handler wraps the page with the fundraiser admin page layout template.
export default function FundraiserAdminOverviewPage(): JSX.Element {
    return (
        <FundraiserAdminPageTemplate>
            <p>Findraiser ajnjnj</p>
        </FundraiserAdminPageTemplate>
    );
}
