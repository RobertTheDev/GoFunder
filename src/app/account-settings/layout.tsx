import AccountSettingsMenu from "@/app/account-settings/components/AccountSettingsMenu";
import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function AccountSettingsLayout(props: { children: ReactNode }) {
    const { children } = props;

    return (
        <div className={styles.pageContainer}>
            <AccountSettingsMenu />
            <div>{children}</div>
        </div>
    );
}
