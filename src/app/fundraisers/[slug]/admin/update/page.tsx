// PURPOSE: This page displays a form to update a fundraiser using its slug.

// The relevant imports required for the page.
import { JSX } from 'react';
import UpdateFundraiserForm from '@/app/modules/fundraiser/components/UpdateFundraiserForm';
import FundraiserAdminPageTemplate from '@/app/modules/fundraiser/layouts/FundraiserAdminLayout';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Update Fundraiser'
};

// This handler displays a form to update a fundraiser.
// This handler wraps the page with the fundraiser admin page layout template.
export default function UpdateFundraiserPage(): JSX.Element {
    return (
        <FundraiserAdminPageTemplate>
            <UpdateFundraiserForm />
        </FundraiserAdminPageTemplate>
    );
}
