// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Owned Fundraisers'
};

export default function OwnedFundraisersPage(): JSX.Element {
    return (
        <div>
            <h1>Owned Fundraisers Page</h1>
        </div>
    );
}
