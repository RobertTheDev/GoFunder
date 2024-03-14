"use client";

import { IDonation } from "@/app/interfaces/Donation";
import Image from "next/image";
import styles from "./styles.module.css";

export default function DonationCard(params: { donation: IDonation }) {
    const { donation } = params;

    return (
        <div className={styles.cardContainer}>
            {donation.fundraiser && (
                <div>
                    <div className={styles.cardImageContainer}>
                        <Image src={donation.fundraiser.image} alt="dd" fill />
                    </div>
                    <p>{donation.fundraiser.name}</p>
                </div>
            )}
            {donation.user && (
                <div>
                    <div className={styles.cardImageContainer}>
                        {donation.user.image ? (
                            <Image
                                src={donation.user.image}
                                alt="dd"
                                height={120}
                                width={120}
                            />
                        ) : (
                            <Image
                                src="/defaultAvatar.png"
                                alt="dd"
                                height={120}
                                width={120}
                            />
                        )}
                    </div>
                    <p>{donation.fundraiser.name}</p>
                </div>
            )}
            <div>
                <p>£{donation.amount.toLocaleString()}</p>
                <p>{donation.message}</p>
            </div>
        </div>
    );
}
