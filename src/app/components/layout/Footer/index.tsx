import Link from 'next/link';
import footerLinks from './footerLinks';

export default function Footer() {
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
