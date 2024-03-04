// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
import CreateFundraiserForm from '../components/fundraiser/CreateFundraiserForm';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Create Fundraiser'
};

export default function CreateFundraiserPage(): JSX.Element {
    return (
        <div>
            <CreateFundraiserForm />
        </div>
    );
}
