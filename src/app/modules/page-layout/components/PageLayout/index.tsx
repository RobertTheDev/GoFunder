'use client';

import { ReactNode } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Footer from '../Footer';
import Header from '../Header';
import styles from './styles.module.css';

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.pageContainer}>
            <ProgressBar
                height="4px"
                color="#00a95c"
                options={{ showSpinner: false }}
                shallowRouting
                delay={250}
            />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
