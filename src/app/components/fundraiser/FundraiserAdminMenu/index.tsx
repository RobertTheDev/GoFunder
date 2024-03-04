import { JSX } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import fundraiserAdminMenuLinks from './fundraiserAdminMenuLinks';

export default function FundraiserAdminMenu(): JSX.Element {
    const pathName = usePathname();

    const { slug } = useParams();

    return (
        <div className="fundraiser-admin-menu-container">
            <span className="fundraiser-admin-menu-title">
                Fundraiser Admin Menu
            </span>
            <nav className="fundraiser-admin-menu-link-menu">
                {fundraiserAdminMenuLinks.map(({ name, path }) => (
                    <Link
                        className={
                            pathName === `/fundraisers/${slug}/admin/${path}`
                                ? 'fundraiser-admin-menu-link-active'
                                : 'fundraiser-admin-menu-link-text'
                        }
                        href={`/fundraisers/${slug}/admin/${path}`}
                        key={path}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
