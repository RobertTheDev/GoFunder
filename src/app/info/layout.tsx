import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function InfoLayout({ children }: { children: ReactNode }) {
    return <div className={styles.pageContainer}>{children}</div>;
}
