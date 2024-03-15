import { Metadata } from "next";
import CreateFundraiserForm from "../components/CreateFundraiserForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Create Fundraiser",
};

// This handler returns a template used to to create a fundraiser.
export default function CreateFundraiserPage() {
    return <CreateFundraiserForm />;
}
