import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import profileMenuLinks from "./profileMenuLinks";
import styles from "./styles.module.css";

const ProfileMenu = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    const pathName = usePathname();

    return (
        <div className={styles.menuContainer} ref={ref}>
            <p className={styles.menuTitle}>Profile Menu</p>
            <nav className={styles.menuLinksContainer}>
                {profileMenuLinks.map(({ name, path, icon }) => (
                    <Link
                        key={path}
                        href={path}
                        className={styles.menuLinkContainer}
                    >
                        <div className={styles.menuLinkIconContainer}>
                            {icon}
                        </div>
                        <p
                            className={
                                pathName === path
                                    ? styles.menuLinkActive
                                    : styles.menuLinkText
                            }
                        >
                            {name}
                        </p>
                    </Link>
                ))}
            </nav>
            <button className={styles.signOutButton} type="button">
                <FaSignOutAlt /> Sign Out
            </button>
        </div>
    );
});

export default ProfileMenu;
