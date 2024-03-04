// PURPOSE: This page fecthes and displays data for a queried fundraiser using its slug.

// The relevant imports required for the page.
import { JSX } from 'react';
import FundraiserTemplate from '@/app/templates/fundraiser/FundraiserTemplate';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser'
};

// This handler fetched fundraiser data from the API and inject it into the fundraiser template.
export default function FundraiserPage(): JSX.Element {
    return <FundraiserTemplate />;
}
