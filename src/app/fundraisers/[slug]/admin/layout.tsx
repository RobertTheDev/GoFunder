"use client";

import FundraiserAdminMenu from "@/app/modules/fundraiser/components/FundraiserAdminMenu";
import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function FundraiserAdminPageTemplate({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className={styles.pageContainer}>
            <div>
                <FundraiserAdminMenu />
            </div>
            <div>{children}</div>
        </div>
    );
}
