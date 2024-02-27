'use client';

import Image from 'next/image';
import IFundraiser from '../../../../../interfaces/Fundraiser';

export default function FundraiserCard(fundraiser: IFundraiser) {
    const { imageUrl, owner, target, title, totalRaised } = fundraiser;

    return (
        <div>
            <div>
                <Image alt={title} fill src={imageUrl} />
            </div>
            <div>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <div>
                        {owner.imageUrl ? (
                            <Image src={owner.imageUrl} alt={owner.name} fill />
                        ) : (
                            <Image src="dd" alt={owner.name} fill />
                        )}
                    </div>

                    <p>{owner.name}</p>
                </div>
                <div>
                    <div>
                        <svg
                            height="100%"
                            width={`${(totalRaised / target) * 100}%`}
                        />
                    </div>
                    <p>
                        £{totalRaised.toLocaleString()} raised of target £
                        {target}
                    </p>
                </div>
            </div>
        </div>
    );
}
