import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./styles.css";
import { ReactNode } from "react";
import { ApolloWrapper } from "@/app/lib/apollo/ApolloWrapper";
import PageLayout from "@/app/modules/page-layout/components/PageLayout";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | GoFunder",
        default: "GoFunder | Online Fundraising Platform",
    },
    description:
        "GoFunder is a non-commercial online fundraising platform developed using Next 14 with React by software developer Robert Hawker as part of his website portfolio.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <ApolloWrapper>
                <body className={outfit.className}>
                    <PageLayout>{children}</PageLayout>
                </body>
            </ApolloWrapper>
        </html>
    );
}
