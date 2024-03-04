import FundraiserTemplate from '@/app/templates/fundraiser/FundraiserTemplate';
import { Metadata } from 'next';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraiser'
};

export default function FundraiserPage() {
    return <FundraiserTemplate />;
}
