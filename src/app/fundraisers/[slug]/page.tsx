import { FaHandHoldingHeart, FaHeart } from "react-icons/fa";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
// import { format } from "date-fns";
import styles from "./page.module.css";

// Metadata defines the seo options for this page.
export const metadata: Metadata = {
    title: "Fundraiser",
};

// This handler fetched fundraiser data from the API and inject it into the fundraiser template.
export default async function FundraiserPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    const res = await fetch(`http://localhost:3000/api/fundraisers/${slug}`, {
        cache: "no-cache",
    });
    const fundraiser = await res.json();

    // const router = useRouter();

    const {
        name,
        id,
        description,
        // deadlineDate,
        // createdAt,
        image,
        target,
        totalDonations,
        totalRaised,
        // donations,
    } = fundraiser;

    async function handleSaveButton() {
        await fetch("http://localhost:3000/api/saved-fundraisers/save", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fundraiserId: id }),
        });
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.imageContainer}>
                <Image src={image} alt={name} fill />
            </div>

            <p className={styles.pageTitle}>{name}</p>
            {/* <p>{format(new Date(createdAt), "yyyy")}</p> */}
            {/* {deadlineDate && <p>{format(new Date(deadlineDate), "yyyy")}</p>} */}

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.saveButton}
                    type="button"
                    onClick={handleSaveButton}
                >
                    <FaHeart /> Save
                </button>
                <Link
                    className={styles.donateButton}
                    type="button"
                    href={`/fundraisers/${slug}/donate`}
                >
                    <FaHandHoldingHeart /> Donate
                </Link>
            </div>
            <p>{target}</p>
            <p> {totalDonations}</p>
            <p>{totalRaised}</p>

            <div className={styles.descriptionContainer}>
                <p className={styles.descriptionText}>{description}</p>
            </div>

            {/* {donations.map((donation) => (
                <DonationCard key={donation.id} donation={donation} />
            ))} */}
        </div>
    );
}
