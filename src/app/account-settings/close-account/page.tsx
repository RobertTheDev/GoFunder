import { Metadata } from "next";
import CloseAccountForm from "../components/CloseAccountForm";

export const metadata: Metadata = {
    title: "Close Account",
};

export default function CloseAccountPage() {
    return <CloseAccountForm />;
}
