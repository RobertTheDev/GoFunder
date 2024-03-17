import { Metadata } from "next";
import CloseAccountForm from "../components/CloseAccountForm";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Close Account",
};

// This handler returns a form to close a user's account.
export default function CloseAccountPage() {
    return <CloseAccountForm />;
}
