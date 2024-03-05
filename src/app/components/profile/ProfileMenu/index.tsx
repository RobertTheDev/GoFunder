import { ForwardedRef, forwardRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSignOutAlt } from 'react-icons/fa';
import profileMenuLinks from './profileMenuLinks';

const ProfileMenu = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    const pathName = usePathname();

    return (
        <div className="profile-menu-container" ref={ref}>
            <span className="profile-menu-title">Profile Menu</span>
            <nav className="profile-menu-link-menu">
                {profileMenuLinks.map(({ name, path, icon }) => (
                    <Link
                        key={path}
                        href={path}
                        className="profile-menu-link-container"
                    >
                        <div className="profile-menu-link-icon-container">
                            {icon}
                        </div>
                        <span
                            className={
                                pathName === path
                                    ? 'profile-menu-link-active'
                                    : 'profile-menu-link-text'
                            }
                        >
                            {name}
                        </span>
                    </Link>
                ))}
            </nav>
            <button className="profile-menu-sign-out-button" type="button">
                <FaSignOutAlt /> Sign Out
            </button>
        </div>
    );
});

export default ProfileMenu;
