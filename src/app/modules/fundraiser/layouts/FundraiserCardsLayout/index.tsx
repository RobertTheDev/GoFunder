import { ReactNode } from 'react';
import styles from './styles.module.css';

export default function FundraiserCardsLayout({
    children
}: {
    children: ReactNode;
}) {
    return <div className={styles.pageContainer}>{children}</div>;
}
