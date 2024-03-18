import Image from "next/image";
import styles from "./styles.module.css";

export default function ErrorTemplate({ reset }: { reset: () => void }) {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Oops. Something went wrong!</h1>
            <button className={styles.pageButton} type="button" onClick={reset}>
                Try again
            </button>
            <div className={styles.pageImageContainer}>
                <Image src="/404.svg" alt="Not found" fill />
            </div>
        </div>
    );
}
