// PURPOSE: This page fetched and displays the fundraisers saved by the user.

// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Saved Fundraisers'
};

// The handler maps fundraiser cards with saved fundraiser data fetched from the API injected.
export default function SavedFundraisersPage(): JSX.Element {
    return (
        <div>
            <h1>Saved Fundraisers Page</h1>
        </div>
    );
}
