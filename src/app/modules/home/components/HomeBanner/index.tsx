import Image from "next/image";
import styles from "./styles.module.css";

export default function HomeBanner() {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerImageContainer}>
                <Image src="/homeBanner.png" alt="home" fill />
            </div>
            <div className={styles.bannerContentContainer}>
                <p className={styles.bannerTitle}>
                    Raise funds for the causes you care about
                </p>
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
