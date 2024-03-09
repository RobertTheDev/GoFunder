// PURPOSE: This page displays a 404 message when no page is found.

// The relevant imports required for the page.
import { Metadata } from 'next';
import NotFoundTemplate from '@/app/modules/not-found/template/NotFoundTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Not Found'
};

// The handler returns the not found page template.
export default function NotFoundPage() {
    return <NotFoundTemplate />;
}
