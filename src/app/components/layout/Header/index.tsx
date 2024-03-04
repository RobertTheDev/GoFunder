'use client';

import Link from 'next/link';
import { useProfileMenu } from '@/app/hooks/profileMenu/useProfileMenu';
import { usePathname, useRouter } from 'next/navigation';
import ProfileMenu from '../../profile/ProfileMenu';
import headerLinks from './headerLinks';

export default function Header() {
    const { toggleProfileMenu, profileMenuActive, profileMenuRef } =
        useProfileMenu();

    const router = useRouter();

    const pathName = usePathname();

    return (
        <header className="header-container">
            <div className="header-content-container">
                <Link href="/" className="header-logo">
                    GoFunder
                </Link>
                <nav className="header-link-menu">
                    {headerLinks.map(({ href, name }) => (
                        <Link
                            key={name}
                            href={href}
                            className={
                                pathName === href
                                    ? 'header-link-active'
                                    : 'header-link'
                            }
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="header-controls-container">
                <button
                    className="header-auth-button-sign-in"
                    type="button"
                    onClick={() => router.push('/auth/sign-in')}
                >
                    Sign In
                </button>
                <button
                    className="header-auth-button-sign-up"
                    type="button"
                    onClick={() => router.push('/auth/sign-up')}
                >
                    Sign Up
                </button>

                <input
                    type="image"
                    src="/defaultAvatar.png"
                    alt="avatar image"
                    className="header-avatar-input"
                    onClick={() => toggleProfileMenu()}
                />
                {profileMenuActive && <ProfileMenu ref={profileMenuRef} />}
            </div>
        </header>
    );
}
