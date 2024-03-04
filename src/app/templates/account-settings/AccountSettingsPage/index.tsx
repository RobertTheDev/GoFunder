'use client';

import AccountSettingsMenu from '@/app/components/account-settings/AccountSettingsMenu';
import { ReactNode } from 'react';

export default function AccountSettingsPageTemplate({
    children
}: {
    children: ReactNode;
}) {
    return (
        <div className="account-settings-page-container">
            <div>
                <AccountSettingsMenu />
            </div>
            <div>{children}</div>
        </div>
    );
}
