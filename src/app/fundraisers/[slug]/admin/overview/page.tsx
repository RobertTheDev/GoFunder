import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser Overview'
};

export default function FundraiserAdminOverviewPage() {
    return (
        <FundraiserAdminPageTemplate>
            <p>Findraiser ajnjnj</p>
        </FundraiserAdminPageTemplate>
    );
}
