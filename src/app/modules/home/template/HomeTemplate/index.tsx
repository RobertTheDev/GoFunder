import FundraiserSection from "@/app/components/home/FundraiserSection";
import HomeBanner from "@/app/components/home/HomeBanner";
import styles from "./styles.module.css";

export default function HomeTemplate() {
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
