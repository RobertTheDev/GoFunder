import Link from 'next/link';
import styles from './styles.module.css';
import ProfileMenu from '../../profile/ProfileMenu';

export default function Header() {
    const headerLinks: {
        href: string;
        name: string;
    }[] = [
        {
            href: '/about',
            name: 'About'
        },
        { href: '/', name: 'Find Fundraisers' },
        { href: '/create-fundraiser', name: 'Create A Fundraiser' }
    ];

    return (
        <header className={styles.headerContainer}>
            <Link className={styles.headerLogo} href="/">
                GoFunder
            </Link>
            <nav>
                {headerLinks.map(({ href, name }) => (
                    <Link key={name} href={href}>
                        {name}
                    </Link>
                ))}
            </nav>
            <div>
                <Link href="/saved-fundraisers">Saved Fundraisers</Link>
                <button type="button">Profile</button>
                <ProfileMenu />
            </div>
        </header>
    );
}
