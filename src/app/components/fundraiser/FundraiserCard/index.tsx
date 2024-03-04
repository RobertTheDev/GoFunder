'use client';

import { Fundraiser } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function FundraiserCard(fundraiser: Fundraiser) {
    const { id, image, name, totalRaised, target } = fundraiser;

    const pathName = usePathname();

    const router = useRouter();

    return (
        <Link
            href={
                pathName === '/my-fundraisers'
                    ? `fundraisers/${id}/admin/overview`
                    : `fundraisers/${id}`
            }
            className="fundraiser-card-container"
        >
            <div className="fundraiser-card-image-container">
                {image ? (
                    <Image
                        className="fundraiser-card-image"
                        src={image}
                        alt={name}
                        fill
                    />
                ) : (
                    <Skeleton
                        style={{
                            height: '100%',
                            position: 'absolute'
                        }}
                    />
                )}
            </div>
            <div className="fundraiser-card-content-container">
                <p className="fundraiser-card-title">
                    {name !== null ? name : <Skeleton />}
                </p>
                <div className="fundraiser-card-progress-container">
                    {totalRaised && target ? (
                        <Skeleton />
                    ) : (
                        <div className="fundraiser-card-progress-line-container">
                            <svg
                                className="fundraiser-card-progress-line"
                                height="100%"
                                width={`${(totalRaised / target) * 100}%`}
                            />
                        </div>
                    )}
                    <p className="fundraiser-card-progress-text">
                        {totalRaised ? (
                            `£${totalRaised.toLocaleString} raised`
                        ) : (
                            <Skeleton />
                        )}
                    </p>
                </div>
                {pathName === '/my-fundraisers' && (
                    <div>
                        {id ? (
                            <button
                                className="fundraiser-card-button"
                                onClick={() =>
                                    router.push(
                                        `fundraisers/${id}/admin/overview`
                                    )
                                }
                                type="button"
                            >
                                Manage Fundraiser
                            </button>
                        ) : (
                            <Skeleton className="fundraiser-card-button" />
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
}
