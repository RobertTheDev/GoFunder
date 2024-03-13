"use client";

import { IFundraiser } from "@/app/interfaces/Fundraiser";
import FundraiserCard from "@/app/modules/fundraiser/components/FundraiserCard";
import useSWR from "swr";
import styles from "./styles.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function FundraiserSection({ category }: { category: string }) {
    const {
        data: fundraisers,
        error,
        isLoading,
    } = useSWR("/api/fundraisers", fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

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
