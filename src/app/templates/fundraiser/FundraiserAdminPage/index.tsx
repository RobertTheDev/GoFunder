'use client';

import FundraiserAdminMenu from '@/app/components/fundraiser/FundraiserAdminMenu';
import { ReactNode } from 'react';
import styles from './styles.module.css';

export default function FundraiserAdminPageTemplate({
    children
}: {
    children: ReactNode;
}) {
    return (
        <div className={styles.pageContainer}>
            <div>
                <FundraiserAdminMenu />
            </div>
            <div>{children}</div>
        </div>
    );
}
