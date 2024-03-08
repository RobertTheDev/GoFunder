// PURPOSE: This page displays a form for a user to create a fundraiser.

// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
import CreateFundraiserTemplate from '../modules/fundraiser/templates/CreateFundraiserTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Create Fundraiser'
};

// This handler displays a form to create a fundraiser.
export default function CreateFundraiserPage(): JSX.Element {
    return <CreateFundraiserTemplate />;
}
