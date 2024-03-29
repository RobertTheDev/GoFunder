import { Metadata } from "next";
import styles from "./page.module.css";
import { IFundraiser } from "../interfaces/Fundraiser";
import FundraiserCard from "./components/FundraiserCard";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraisers",
};

async function getFundraisers() {
    const response = await fetch(`http://localhost:3000/api/fundraisers`, {
        cache: "no-cache",
    });

    return response.json();
}

export default async function FundraisersPage() {
    const fundraisers = await getFundraisers();

    return (
        <div className={styles.pageContainer}>
            {fundraisers.data.map((fundraiser: IFundraiser) => (
                <FundraiserCard fundraiser={fundraiser} key={fundraiser.id} />
            ))}
        </div>
    );
}
