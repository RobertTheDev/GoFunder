import styles from "./styles.module.css";
import {
    PiSealCheckBold,
    PiShieldWarningBold,
    PiWarningBold,
    PiInfoBold,
} from "react-icons/pi";

export function DangerSnackbar() {
    return (
        <div className={styles.dangerContainer}>
            <PiShieldWarningBold className={styles.dangerIcon} />
            <p className={styles.dangerText}>Form submission status: danger</p>
        </div>
    );
}

export function InfoSnackbar() {
    return (
        <div className={styles.infoContainer}>
            <PiInfoBold className={styles.infoIcon} />
            <p className={styles.infoText}>
                Form submission status: information
            </p>
        </div>
    );
}

export function SuccessSnackbar() {
    return (
        <div className={styles.successContainer}>
            <PiSealCheckBold className={styles.successIcon} />
            <p className={styles.successText}>
                Form submission status: success
            </p>
        </div>
    );
}

export function WarningSnackbar() {
    return (
        <div className={styles.warningContainer}>
            <PiWarningBold className={styles.warningIcon} />
            <p className={styles.warningText}>
                Form submission status: warning
            </p>
        </div>
    );
}
