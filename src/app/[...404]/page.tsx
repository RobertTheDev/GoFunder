import { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.css";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Not Found",
};

// The handler returns the not found page template.
export default function NotFoundPage() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>404 - Not Found</h1>
            <div className={styles.pageImageContainer}>
                <Image src="/404.svg" alt="Not found" fill />
            </div>
        </div>
    );
}
