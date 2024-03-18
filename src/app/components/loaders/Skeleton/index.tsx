import styles from "./styles.module.css";

export default function SkeletonLoader() {
    return (
        <div style={{ height: 240, width: 240, position: "relative" }}>
            <div className={styles.loadingSkeleton} />
        </div>
    );
}
