import { Metadata } from "next";
import UpdateProfileForm from "../components/UpdateProfileForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Update Profile",
};

// This handler returns a form to update a user's profile.
export default function UpdateProfilePage() {
    return <UpdateProfileForm />;
}
