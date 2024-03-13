// PURPOSE: This page fecthes and displays data for a queried fundraiser using its slug.

// The relevant imports required for the page.
// import FundraiserTemplate from "@/app/modules/fundraiser/templates/FundraiserTemplate";
import FundraiserTemplate from "@/app/modules/fundraiser/templates/FundraiserTemplate";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraiser",
};

// This handler fetched fundraiser data from the API and inject it into the fundraiser template.
export default async function FundraiserPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    const res = await fetch(`http://localhost:3000/api/fundraisers/${slug}`, {
        cache: "no-cache",
    });
    const fundraiser = await res.json();

    return <FundraiserTemplate fundraiser={fundraiser.data} />;
}
