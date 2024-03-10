import { getClient } from '@/app/lib/apollo/apolloClient';
import { gql } from '@apollo/client';
import { IFundraiser } from '@/app/interfaces/Fundraiser';
import FundraiserCard from '@/app/modules/fundraiser/components/FundraiserCard';
import { Metadata } from 'next';
import styles from './styles.module.css';

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: 'Fundraisers'
};

const GET_FUNDRAISERS = gql`
    query getFundraisers {
        fundraisers {
            id
            image
            name
            slug
            target
            totalDonations
            totalRaised
        }
    }
`;

export default async function FundraiserSection({
    category
}: {
    category: string;
}) {
    const client = getClient();

    const {
        loading,
        error,
        data: { fundraisers }
    } = await client.query({
        query: GET_FUNDRAISERS
    });

    if (error) return <p>There was an error</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div className={styles.sectionContainer}>
            <p className={styles.sectionTitle}>{category}</p>

            <div className={styles.sectionCardsGrid}>
                {fundraisers.slice(0, 4).map((fundraiser: IFundraiser) => (
                    <FundraiserCard
                        fundraiser={fundraiser}
                        key={fundraiser.id}
                    />
                ))}
            </div>
        </div>
    );
}
