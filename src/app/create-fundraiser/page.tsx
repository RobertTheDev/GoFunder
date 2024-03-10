// PURPOSE: This page displays a form for a user to create a fundraiser.

// The relevant imports required for the page.
import { Metadata } from "next";
import CreateFundraiserTemplate from "@/app/modules/fundraiser/templates/CreateFundraiserTemplate";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Create Fundraiser",
};

// This handler returns a template used to to create a fundraiser.
export default function CreateFundraiserPage() {
    return <CreateFundraiserTemplate />;
}
