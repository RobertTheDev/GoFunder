import { Metadata } from 'next';
import NotFoundTemplate from '../templates/not-found/NotFoundTemplate';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Not Found'
};

export default function NotFoundPage() {
    return <NotFoundTemplate />;
}
