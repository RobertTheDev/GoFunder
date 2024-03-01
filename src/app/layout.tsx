import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { ApolloWrapper } from './lib/apollo/ApolloWrapper';
import PageLayout from './components/layout/PageLayout';
import StyledComponentsRegistry from './lib/styled-components/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | GoFunder',
        default: 'GoFunder | Online Fundraising Platform'
    },
    description:
        'GoFunder is a non-commercial online fundraising platform developed using Next 14 with React by software developer Robert Hawker as part of his website portfolio.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <ApolloWrapper>
                <body className={inter.className}>
                    <StyledComponentsRegistry>
                        <PageLayout>{children}</PageLayout>
                    </StyledComponentsRegistry>
                </body>
            </ApolloWrapper>
        </html>
    );
}
