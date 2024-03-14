"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
// import DonationCard from "@/app/modules/donation/components/DonationCard";
import { IFundraiser } from "@/app/interfaces/Fundraiser";
import { FaHandHoldingHeart, FaHeart } from "react-icons/fa";
// import DonationCard from "@/app/modules/donation/components/DonationCard";
import styles from "./styles.module.css";

export default function FundraiserTemplate(params: {
    fundraiser: IFundraiser;
}) {
    const { fundraiser } = params;

    const router = useRouter();

    const {
        name,
        id,
        description,
        deadlineDate,
        createdAt,
        image,
        slug,
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
            <p>{format(new Date(createdAt), "yyyy")}</p>
            {deadlineDate && <p>{format(new Date(deadlineDate), "yyyy")}</p>}

            <div className={styles.buttonsContainer}>
                <button
                    className={styles.saveButton}
                    type="button"
                    onClick={handleSaveButton}
                >
                    <FaHeart /> Save
                </button>
                <button
                    className={styles.donateButton}
                    type="button"
                    onClick={() => router.push(`/fundraisers/${slug}/donate`)}
                >
                    <FaHandHoldingHeart /> Donate
                </button>
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
