'use client';

import { IDonation } from '@/app/interfaces/Donation';
import Image from 'next/image';
import styles from './styles.module.css';

export default function DonationCard(params: { donation: IDonation }) {
    const {
        donation: { amount, message, fundraiser }
    } = params;

    return (
        <div className={styles.cardContainer}>
            <div>
                <div className={styles.cardImageContainer}>
                    <Image src={fundraiser.image} alt="dd" fill />
                </div>
                <p>{fundraiser.name}</p>
            </div>
            <div>
                <p>£{amount.toLocaleString()}</p>
                <p>{message}</p>
            </div>
            {/* {user.image ? (
                <Image src={user.image} alt="dd" height={120} width={120} />
            ) : (
                <Image
                    src="/defaultAvatar.png"
                    alt="dd"
                    height={120}
                    width={120}
                />
            )}
            <p>{user.username}</p> */}
        </div>
    );
}
