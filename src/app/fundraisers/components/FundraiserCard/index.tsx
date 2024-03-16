"use client";

import Image from "next/image";
import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IFundraiser } from "@/app/interfaces/Fundraiser";
import styles from "./styles.module.css";

export default function FundraiserCard({
    fundraiser,
}: {
    fundraiser: IFundraiser;
}) {
    const { id, image, name, slug, totalRaised, target } = fundraiser;

    const pathName = usePathname();

    const router = useRouter();

    return (
        <Link
            href={
                pathName === "/my-fundraisers"
                    ? `fundraisers/${slug}/admin/overview`
                    : `fundraisers/${slug}`
            }
            className={styles.cardContainer}
        >
            <div className={styles.cardImageContainer}>
                {image ? (
                    <Image
                        className={styles.cardImage}
                        src={image}
                        alt={name}
                        fill
                    />
                ) : (
                    <Skeleton
                        style={{
                            height: "100%",
                            position: "absolute",
                        }}
                    />
                )}
            </div>
            <div className={styles.cardContentContainer}>
                <div className={styles.cardTitleContainer}>
                    <p className={styles.cardTitle}>
                        {name !== null ? name : <Skeleton />}
                    </p>
                </div>
                <div className={styles.cardProgressContainer}>
                    {totalRaised && target ? (
                        <div className={styles.cardProgressLineContainer}>
                            <svg
                                className={styles.cardProgressLine}
                                height="100%"
                                width={`${(totalRaised / target) * 100}%`}
                            />
                        </div>
                    ) : (
                        <Skeleton />
                    )}
                    <p className={styles.cardProgressText}>
                        {totalRaised ? (
                            `£${totalRaised.toLocaleString()} raised of £${target.toLocaleString()} target`
                        ) : (
                            <Skeleton />
                        )}
                    </p>
                </div>
                {/* {pathName === "/my-fundraisers" && (
                    <div>
                        {id ? (
                            <button
                                className={styles.cardButton}
                                onClick={() =>
                                    router.push(
                                        `fundraisers/${id}/admin/overview`,
                                    )
                                }
                                type="button"
                            >
                                <MdManageAccounts />
                                Manage Fundraiser
                            </button>
                        ) : (
                            <Skeleton className={styles.cardButton} />
                        )}
                    </div>
                )} */}
            </div>
        </Link>
    );
}
