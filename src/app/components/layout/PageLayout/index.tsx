import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
