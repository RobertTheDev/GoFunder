import Image from 'next/image';
import styles from './styles.module.css';

export default function NotFoundTemplate() {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>404 - Not Found</h1>
            <div className={styles.pageImageContainer}>
                <Image src="/404.svg" alt="404" fill />
            </div>
        </div>
    );
}
