import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import accountSettingsLinks from './accountSettingsLinks';

export default function AccountSettingsMenu(): JSX.Element {
    const pathName = usePathname();

    return (
        <div className="account-settings-menu-container">
            <span className="account-settings-menu-title">
                Account Settings
            </span>
            <nav className="account-settings-menu-link-menu">
                {accountSettingsLinks.map(({ name, path }) => (
                    <Link
                        className={
                            pathName === path
                                ? 'account-settings-menu-link-active'
                                : 'account-settings-menu-link-text'
                        }
                        href={path}
                        key={path}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
