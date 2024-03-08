// PURPOSE: This page is displayed and returns a 404 message when no page is found.

// The relevant imports required for the page.
import { JSX } from 'react';
import { Metadata } from 'next';
import NotFoundTemplate from '@/app/modules/not-found/template/NotFoundTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Not Found'
};

// The handler returns and displays the not found page template.
export default function NotFoundPage(): JSX.Element {
    return <NotFoundTemplate />;
}
