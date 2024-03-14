import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./styles.module.css";
import ProgressBar from "../ProgressBar";

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.pageContainer}>
            <ProgressBar />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
