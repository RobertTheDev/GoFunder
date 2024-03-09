// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { Metadata } from 'next';
import FundraiserCardsLayout from '@/app/modules/fundraiser/layouts/FundraiserCardsLayout';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Saved Fundraisers'
};

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default function SavedFundraisersPage() {
    return (
        <FundraiserCardsLayout>
            <h1>Saved Fundraisers Page</h1>
        </FundraiserCardsLayout>
    );
}
