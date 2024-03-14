import DeleteFundraiserForm from "@/app/fundraisers/components/DeleteFundraiserForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Delete Fundraiser",
};

// This handler displays a form to delete a fundraiser.
export default function DeleteFundraiserPage() {
    return <DeleteFundraiserForm />;
}
