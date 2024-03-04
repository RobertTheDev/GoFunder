import CreateDonationForm from '@/app/components/donation/CreateDonationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Make A Donation'
};

export default function FundraiserDonationPage() {
    return <CreateDonationForm />;
}
