import styles from "./styles.module.css";

export default function DotsLoader() {
    return (
        <div className={styles.loading}>
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
        </div>
    );
}
