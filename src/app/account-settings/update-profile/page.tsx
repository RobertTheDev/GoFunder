import { Metadata } from "next";
import UpdateProfileForm from "../components/UpdateProfileForm";

export const metadata: Metadata = {
    title: "Update Profile",
};

export default function UpdateProfilePage() {
    return <UpdateProfileForm />;
}
