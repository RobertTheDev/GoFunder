import { Metadata } from 'next';
import CreateFundraiserForm from '../components/fundraiser/CreateFundraiserForm';

export const metadata: Metadata = {
    title: 'Create Fundraiser'
};

export default function CreateFundraiserPage() {
    return (
        <div>
            <h1>Create Fundraiser</h1>
            <CreateFundraiserForm />
        </div>
    );
}
