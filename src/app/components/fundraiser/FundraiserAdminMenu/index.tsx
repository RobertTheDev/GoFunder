import Link from 'next/link';
import fundraiserAdminMenuLinks from './fundraiserAdminMenuLinks';

export default function FundraiserAdminMenu() {
    return (
        <div>
            <p>Fundraiser Admin Menu</p>
            {fundraiserAdminMenuLinks.map(({ name, path }) => (
                <Link href={path} key={path}>
                    {name}
                </Link>
            ))}
        </div>
    );
}
