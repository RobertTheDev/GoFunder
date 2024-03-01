import FundraiserTemplate from '@/app/components/fundraiser/FundraiserTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fundraiser'
};

export default function FundraiserPage() {
    return (
        <div>
            <h1>Fundraiser Page</h1>
            <FundraiserTemplate />
        </div>
    );
}
