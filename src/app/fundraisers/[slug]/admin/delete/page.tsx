import DeleteFundraiserForm from '@/app/components/fundraiser/DeleteFundraiserForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Delete Fundraiser'
};

export default function DeleteFundraiserPage() {
    return (
        <div>
            <h1>Delete Fundraiser Page</h1>
            <DeleteFundraiserForm />
        </div>
    );
}
