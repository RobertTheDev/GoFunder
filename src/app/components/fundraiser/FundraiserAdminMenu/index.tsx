import { JSX } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import fundraiserAdminMenuLinks from './fundraiserAdminMenuLinks';
import styles from './styles.module.css';

export default function FundraiserAdminMenu(): JSX.Element {
    const pathName = usePathname();

    const { slug } = useParams();

    return (
        <div className={styles.menuContainer}>
            <span className={styles.menuTitle}>Fundraiser Admin Menu</span>
            <nav className={styles.menuLinksContainer}>
                {fundraiserAdminMenuLinks.map(({ name, path }) => (
                    <Link
                        className={
                            pathName === `/fundraisers/${slug}/admin/${path}`
                                ? styles.menuLinkActive
                                : styles.menuLinkText
                        }
                        href={`/fundraisers/${slug}/admin/${path}`}
                        key={path}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
