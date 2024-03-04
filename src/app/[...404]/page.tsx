import { Metadata } from 'next';
import NotFoundTemplate from '../templates/not-found/NotFoundTemplate';

export const metadata: Metadata = {
    title: 'Not Found'
};

export default function NotFoundPage() {
    return <NotFoundTemplate />;
}
