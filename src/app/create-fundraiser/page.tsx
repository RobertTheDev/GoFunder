// PURPOSE: This page displays a form for a user to create a fundraiser.

// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
import CreateFundraiserForm from '../components/fundraiser/CreateFundraiserForm';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Create Fundraiser'
};

// This handler displays a form to create a fundraiser.
export default function CreateFundraiserPage(): JSX.Element {
    return <CreateFundraiserForm />;
}
