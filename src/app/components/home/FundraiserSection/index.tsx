import { IFundraiser } from "@/app/interfaces/Fundraiser";
import FundraiserCard from "@/app/fundraisers/components/FundraiserCard";
import styles from "./styles.module.css";

async function getFundraisers() {
    const res = await fetch("http://localhost:3000/api/fundraisers", {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function FundraiserSection({
    category,
}: {
    category: string;
}) {
    const fundraisers = await getFundraisers();

    return (
        <div className={styles.sectionContainer}>
            <p className={styles.sectionTitle}>{category}</p>

            <div className={styles.sectionCardsGrid}>
                {fundraisers.data.slice(0, 4).map((fundraiser: IFundraiser) => (
                    <FundraiserCard
                        fundraiser={fundraiser}
                        key={fundraiser.id}
                    />
                ))}
            </div>
        </div>
    );
}
