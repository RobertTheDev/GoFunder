'use client';

import Link from 'next/link';
import { useProfileMenu } from '@/app/hooks/profileMenu/useProfileMenu';
import { usePathname, useRouter } from 'next/navigation';
import ProfileMenu from '../../../profile/components/ProfileMenu';
import headerLinks from './headerLinks';
import styles from './styles.module.css';

export default function Header() {
    const { toggleProfileMenu, profileMenuActive, profileMenuRef } =
        useProfileMenu();

    const router = useRouter();

    const pathName = usePathname();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContentContainer}>
                <Link href="/" className={styles.headerLogo}>
                    GoFunder
                </Link>
                <nav className={styles.headerLinkMenu}>
                    {headerLinks.map(({ href, name }) => (
                        <Link
                            key={name}
                            href={href}
                            className={
                                pathName === href
                                    ? styles.headerLinkActive
                                    : styles.headerLinkText
                            }
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className={styles.headerControlsContainer}>
                <button
                    className={styles.headerSignInButton}
                    type="button"
                    onClick={() => router.push('/auth/sign-in')}
                >
                    Sign In
                </button>
                <button
                    className={styles.headerSignUpButton}
                    type="button"
                    onClick={() => router.push('/auth/sign-up')}
                >
                    Sign Up
                </button>

                <input
                    type="image"
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="avatar image"
                    className={styles.headerAvatarInput}
                    onClick={() => toggleProfileMenu()}
                />
                {profileMenuActive && <ProfileMenu ref={profileMenuRef} />}
            </div>
        </header>
    );
}
