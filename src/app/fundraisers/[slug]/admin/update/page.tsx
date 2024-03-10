// PURPOSE: This page displays a form to update a fundraiser using its slug.

// The relevant imports required for the page.
import UpdateFundraiserForm from "@/app/modules/fundraiser/components/UpdateFundraiserForm";
import FundraiserAdminLayout from "@/app/modules/fundraiser/layouts/FundraiserAdminLayout";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Update Fundraiser",
};

// This handler displays a form to update a fundraiser.
// This handler wraps the page with the fundraiser admin page layout template.
export default function UpdateFundraiserPage() {
    return (
        <FundraiserAdminLayout>
            <UpdateFundraiserForm />
        </FundraiserAdminLayout>
    );
}
