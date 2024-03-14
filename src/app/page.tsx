import FundraiserSection from "./components/home/FundraiserSection";
import HomeBanner from "./components/home/HomeBanner";
import styles from "./page.module.css";

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <HomeBanner />
            <div className={styles.pageSectionsContainer}>
                <FundraiserSection category="Animals and Pets" />
                <FundraiserSection category="Disability" />
                <FundraiserSection category="International Aid" />
                <FundraiserSection category="Sports" />
            </div>
        </div>
    );
}
