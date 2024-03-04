// The relevant imports required for the page.
import { JSX } from 'react';
import UpdateFundraiserForm from '@/app/components/fundraiser/UpdateFundraiserForm';
import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Update Fundraiser'
};

export default function UpdateFundraiserPage(): JSX.Element {
    return (
        <FundraiserAdminPageTemplate>
            <UpdateFundraiserForm />
        </FundraiserAdminPageTemplate>
    );
}
