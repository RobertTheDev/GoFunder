import Link from "next/link";
import { usePathname } from "next/navigation";
import accountSettingsLinks from "./accountSettingsLinks";
import styles from "./styles.module.css";

export default function AccountSettingsMenu() {
    const pathName = usePathname();

    return (
        <div className={styles.menuContainer}>
            <p className={styles.menuTitle}>Account Settings</p>
            <nav className={styles.menuLinksContainer}>
                {accountSettingsLinks.map((link) => (
                    <Link
                        className={
                            pathName === link.path
                                ? styles.menuLinkActive
                                : styles.menuLinkText
                        }
                        href={link.path}
                        key={link.path}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
