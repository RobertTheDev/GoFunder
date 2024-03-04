import DeleteFundraiserForm from '@/app/components/fundraiser/DeleteFundraiserForm';
import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Delete Fundraiser'
};

export default function DeleteFundraiserPage() {
    return (
        <FundraiserAdminPageTemplate>
            <DeleteFundraiserForm />
        </FundraiserAdminPageTemplate>
    );
}
