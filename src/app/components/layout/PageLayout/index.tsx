'use client';

import { ReactNode } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Footer from '../Footer';
import Header from '../Header';
import { StyledPageContainer } from './styles';

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <StyledPageContainer>
            <ProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
                delay={250}
            />
            <Header />
            <main>{children}</main>
            <Footer />
        </StyledPageContainer>
    );
}
