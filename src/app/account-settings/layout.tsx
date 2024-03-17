import AccountSettingsMenu from "@/app/account-settings/components/AccountSettingsMenu";
import { ReactNode } from "react";
import styles from "./layout.module.css";

export default function AccountSettingsLayout(props: { children: ReactNode }) {
    return (
        <div className={styles.pageContainer}>
            <AccountSettingsMenu />
            <div>{props.children}</div>
        </div>
    );
}
