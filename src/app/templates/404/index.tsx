import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function NotFoundTemplate() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>404 - Not Found</h1>
            <Link className={styles.pageButton} href="/">
                Go Home
            </Link>
            <div className={styles.pageImageContainer}>
                <Image src="/404.svg" alt="Not found" fill />
            </div>
        </div>
    );
}
