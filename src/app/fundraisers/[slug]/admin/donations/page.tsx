import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Donations'
};

export default function FundraiserDonationsPage() {
    return (
        <FundraiserAdminPageTemplate>
            <h1>Fundraiser Donations Page</h1>
        </FundraiserAdminPageTemplate>
    );
}
