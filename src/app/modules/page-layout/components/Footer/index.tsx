"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import footerLinks from "./footerLinks";
import styles from "./styles.module.css";

export default function Footer() {
    const pathName = usePathname();

    return (
        <footer className={styles.footerContainer}>
            <nav className={styles.footerLinkMenu}>
                {footerLinks.map((link) => (
                    <Link
                        href={link.href}
                        key={link.href}
                        className={
                            pathName === link.href
                                ? styles.footerLinkActive
                                : styles.footerLinkText
                        }
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <small className={styles.footerCopyrightText}>
                ©{new Date().getFullYear()} GoFunder
            </small>
        </footer>
    );
}
