import { Metadata } from "next";
import ChangeEmailForm from "../components/ChangeEmailForm";

export const metadata: Metadata = {
    title: "Change Email",
};

export default function ChangeEmailPage() {
    return <ChangeEmailForm />;
}
