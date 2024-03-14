import UpdateFundraiserForm from "@/app/modules/fundraiser/components/UpdateFundraiserForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Update Fundraiser",
};

// This handler displays a form to update a fundraiser.
export default function UpdateFundraiserPage() {
    return <UpdateFundraiserForm />;
}
