// PURPOSE: This page displays a form for a user to update their profile.

// The relevant imports required for the page.
import UpdateProfileForm from "@/app/account-settings/components/UpdateProfileForm";
import { Metadata } from "next";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Update Profile",
};

// This handler returns a form to update a user's profile.
// This handler wraps the form component with the account settings layout.
export default function UpdateProfilePage() {
    return <UpdateProfileForm />;
}
