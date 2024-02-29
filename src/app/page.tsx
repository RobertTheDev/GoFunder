import { getClient } from '@/apolloClient';
import { gql } from '@apollo/client';
import { Fundraiser } from '@prisma/client';
import FundraiserCard from './components/fundraiser/FundraiserCard';

const GET_FUNDRAISERS = gql`
    query getFundraisers {
        fundraisers {
            id
            image
            name
        }
    }
`;

export default async function HomePage() {
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
        <div>
            {fundraisers.map((fundraiser: Fundraiser) => (
                <FundraiserCard {...fundraiser} key={fundraiser.id} />
            ))}
        </div>
    );
}
