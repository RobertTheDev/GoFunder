import Image from 'next/image';
import { JSX } from 'react';
import styles from './styles.module.css';

export default function HomeBanner(): JSX.Element {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerImageContainer}>
                <Image
                    src="https://images.unsplash.com/photo-1596460658047-1826d5921c56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="home"
                    fill
                />
            </div>
            <div className={styles.bannerContentContainer}>
                <span className={styles.bannerTitle}>
                    Raise funds for the causes you care about
                </span>
                <div className={styles.bannerButtonGroup}>
                    <button
                        className={styles.bannerButtonPrimary}
                        type="button"
                    >
                        Find Fundraisers
                    </button>
                    <button
                        className={styles.bannerButtonSecondary}
                        type="button"
                    >
                        Start Fundraising
                    </button>
                </div>
            </div>
        </div>
    );
}
