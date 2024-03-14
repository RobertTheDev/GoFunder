import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./styles.css";
import { ReactNode } from "react";
import ProgressBar from "./modules/page-layout/components/ProgressBar";
import Header from "./modules/page-layout/components/Header";
import Footer from "./modules/page-layout/components/Footer";
import styles from "./layout.module.css";

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
            <body className={outfit.className}>
                <div className={styles.pageContainer}>
                    <ProgressBar />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
