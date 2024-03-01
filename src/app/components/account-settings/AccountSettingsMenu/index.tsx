import Link from 'next/link';
import accountSettingsLinks from './accountSettingsLinks';

export default function AccountSettingsMenu() {
    return (
        <div>
            <p>Account Settings Menu</p>
            {accountSettingsLinks.map(({ name, path }) => (
                <Link href={path} key={path}>
                    {name}
                </Link>
            ))}
        </div>
    );
}
