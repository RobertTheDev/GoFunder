import styles from "./styles.module.css";

export default function LoadingTemplate() {
    return (
        <div className={styles.pageContainer}>
            <span className={styles.spinner} />
        </div>
    );
}
