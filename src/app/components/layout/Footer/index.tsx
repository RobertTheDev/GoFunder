import Link from 'next/link';
import { usePathname } from 'next/navigation';
import footerLinks from './footerLinks';

export default function Footer() {
    const pathName = usePathname();

    return (
        <footer className="footer-container">
            <span className="footer-copyright">
                ©{new Date().getFullYear()} GoFunder
            </span>
            <nav className="footer-menu">
                {footerLinks.map(link => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className={
                            pathName === link.href
                                ? 'footer-link-active'
                                : 'footer-link'
                        }
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </footer>
    );
}
