'use client';

import Link from 'next/link';
import ProfileMenu from '../../profile/ProfileMenu';
import { StyledHeaderContainer, StyledHeaderLogo } from './styles';
import headerLinks from './headerLinks';

export default function Header() {
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
