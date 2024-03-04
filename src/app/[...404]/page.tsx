// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
import NotFoundTemplate from '../templates/not-found/NotFoundTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Not Found'
};

// The handler renders the not found page template to show on the page.
export default function NotFoundPage(): JSX.Element {
    return <NotFoundTemplate />;
}
