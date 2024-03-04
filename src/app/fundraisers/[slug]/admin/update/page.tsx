import UpdateFundraiserForm from '@/app/components/fundraiser/UpdateFundraiserForm';
import FundraiserAdminPageTemplate from '@/app/templates/fundraiser/FundraiserAdminPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Update Fundraiser'
};

export default function UpdateFundraiserPage() {
    return (
        <FundraiserAdminPageTemplate>
            <UpdateFundraiserForm />
        </FundraiserAdminPageTemplate>
    );
}
