import Link from 'next/link';

export default function ProfileMenu() {
    const profileMenuLinks: {
        href: string;
        name: string;
    }[] = [
        {
            href: '/profile',
            name: 'Profile'
        },
        {
            href: '/account-settings',
            name: 'Account Settings'
        },
        {
            href: '/my-donations',
            name: 'My Donations'
        },
        {
            href: '/my-fundraisers',
            name: 'My Fundraisers'
        }
    ];

    return (
        <div>
            <p>Profile Menu</p>
            <nav>
                {profileMenuLinks.map(link => (
                    <Link key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>
            <button type="button">Sign Out</button>
        </div>
    );
}
