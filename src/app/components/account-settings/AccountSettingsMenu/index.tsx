import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import accountSettingsLinks from './accountSettingsLinks';
import styles from './styles.module.css';

export default function AccountSettingsMenu(): JSX.Element {
    const pathName = usePathname();

    return (
        <div className={styles.menuContainer}>
            <p className={styles.menuTitle}>Account Settings</p>
            <nav className={styles.menuLinksContainer}>
                {accountSettingsLinks.map(({ name, path }) => (
                    <Link
                        className={
                            pathName === path
                                ? styles.menuLinkActive
                                : styles.menuLinkText
                        }
                        href={path}
                        key={path}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
