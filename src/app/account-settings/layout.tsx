"use client";

import AccountSettingsMenu from "@/app/modules/account-settings/components/AccountSettingsMenu";
import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function AccountSettingsLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className={styles.pageContainer}>
            <div>
                <AccountSettingsMenu />
            </div>
            <div>{children}</div>
        </div>
    );
}
