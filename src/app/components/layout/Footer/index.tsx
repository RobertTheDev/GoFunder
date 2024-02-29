import Link from 'next/link';

export default function Footer() {
    const footerLinks: {
        href: string;
        name: string;
    }[] = [
        {
            href: '/about',
            name: 'About'
        },
        { href: '/accessibility-statement', name: 'Accessibility Statement' },
        { href: '/privacy-policy', name: 'Privacy Policy' },
        { href: '/terms-and-conditions', name: 'Terms and Conditions' }
    ];

    return (
        <footer>
            <div>
                <p>©{new Date().getFullYear()} GoFunder</p>
                <nav>
                    {footerLinks.map(link => (
                        <Link href={link.href} key={link.href}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
