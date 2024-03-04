'use client';

import FundraiserAdminMenu from '@/app/components/fundraiser/FundraiserAdminMenu';
import { ReactNode } from 'react';

export default function FundraiserAdminPageTemplate({
    children
}: {
    children: ReactNode;
}) {
    return (
        <div className="fundraiser-admin-page-container">
            <div>
                <FundraiserAdminMenu />
            </div>
            <div>{children}</div>
        </div>
    );
}
