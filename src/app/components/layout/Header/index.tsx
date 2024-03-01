'use client';

import Link from 'next/link';
import ProfileMenu from '../../profile/ProfileMenu';
import { StyledHeaderContainer, StyledHeaderLogo } from './styles';

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
        <StyledHeaderContainer>
            <StyledHeaderLogo href="/">GoFunder</StyledHeaderLogo>
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
        </StyledHeaderContainer>
    );
}
