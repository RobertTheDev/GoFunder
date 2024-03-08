import { JSX, ReactNode } from 'react';
import styles from './styles.module.css';

export default function CreateDonationTemplate({
    children
}: {
    children: ReactNode;
}): JSX.Element {
    return <div className={styles.pageContainer}>{children}</div>;
}
