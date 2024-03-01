import Link from 'next/link';
import profileMenuLinks from './profileMenuLinks';

export default function ProfileMenu() {
    return (
        <div>
            <p>Profile Menu</p>
            <nav>
                {profileMenuLinks.map(({ name, path }) => (
                    <Link key={path} href={path}>
                        {name}
                    </Link>
                ))}
            </nav>
            <button type="button">Sign Out</button>
        </div>
    );
}
