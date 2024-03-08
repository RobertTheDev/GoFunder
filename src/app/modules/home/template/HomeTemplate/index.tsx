import FundraiserSection from '@/app/modules/home/components/FundraiserSection';
import { JSX } from 'react';
import HomeBanner from '@/app/modules/home/components/HomeBanner';
import styles from './styles.module.css';

export default function HomeTemplate(): JSX.Element {
    return (
        <div className={styles.pageContainer}>
            <HomeBanner />
            <div className={styles.pageSectionsContainer}>
                <FundraiserSection category="Animals and Pets" />
                <FundraiserSection category="Disablity" />
                <FundraiserSection category="International Aid" />
                <FundraiserSection category="Sports" />
            </div>
        </div>
    );
}
