import FundraiserSection from '@/app/components/home/FundraiserSection';
import { JSX } from 'react';
import HomeBanner from '@/app/components/home/HomeBanner';
import styles from './styles.module.css';

export default function HomeTemplate(): JSX.Element {
    return (
        <div className={styles.pageContainer}>
            <HomeBanner />
            <div className={styles.pageSectionsContainer}>
                <FundraiserSection category="Category" />
                <FundraiserSection category="Category" />
                <FundraiserSection category="Category" />
                <FundraiserSection category="Category" />
            </div>
        </div>
    );
}
