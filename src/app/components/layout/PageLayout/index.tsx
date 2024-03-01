'use client';

import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { StyledPageContainer } from './styles';

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <StyledPageContainer>
            <Header />
            <main>{children}</main>
            <Footer />
        </StyledPageContainer>
    );
}
