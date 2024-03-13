// PURPOSE: This page fetches and displays the user'profile data.

// The relevant imports required for the page.
import { Metadata } from "next";
import { headers } from "next/headers";

// import ProfileTemplate from "@/app/modules/profile/templates/ProfileTemplate";
// import useSession from "../hooks/session/useSession";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Profile",
};

// The handler displays and injects profile data into the profile template.
export default async function ProfilePage() {
    const res = await fetch(`http://localhost:3000/api/profile`, {
        cache: "no-cache",
        headers: headers(),
    });
    const profile = await res.json();

    return <p>{JSON.stringify(profile)}</p>;
}
