// PURPOSE: This page displays a form for a user to delete a fundraiser.

// The relevant imports required for the page.
import { JSX } from 'react';
import DeleteFundraiserForm from '@/app/modules/fundraiser/components/DeleteFundraiserForm';
import FundraiserAdminLayout from '@/app/modules/fundraiser/layouts/FundraiserAdminLayout';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Delete Fundraiser'
};

// This handler displays a form to delete a fundraiser.
// This handler wraps the page with the fundraiser admin page layout template.
export default function DeleteFundraiserPage(): JSX.Element {
    return (
        <FundraiserAdminLayout>
            <DeleteFundraiserForm />
        </FundraiserAdminLayout>
    );
}
