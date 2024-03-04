// The relevant imports required for the page.
import { JSX } from 'react';
import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Overview'
};

export default function FundraiserAdminOverviewPage(): JSX.Element {
    return (
        <FundraiserAdminPageTemplate>
            <p>Findraiser ajnjnj</p>
        </FundraiserAdminPageTemplate>
    );
}
