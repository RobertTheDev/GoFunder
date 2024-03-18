import { Metadata } from "next";
import NotFoundTemplate from "../templates/404";

export const metadata: Metadata = {
    title: "Not Found",
};

export default function NotFoundPage() {
    return <NotFoundTemplate />;
}
