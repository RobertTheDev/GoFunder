import fundraisers from '../../data/fundraisers';
import FundraiserCard from './components/fundraiser/FundraiserCard';
import styles from './page.module.css';

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <h1>Home</h1>
            <div className={styles.cardsContainer}>
                {fundraisers.map(fundraiser => (
                    <FundraiserCard key={fundraiser.id} {...fundraiser} />
                ))}
            </div>
        </div>
    );
}
