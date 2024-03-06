import CategoryMenu from '@/app/components/home/CategoryMenu';
import FundraiserSection from '@/app/components/home/FundraiserSection';
import Image from 'next/image';
import { JSX } from 'react';

export default function HomeTemplate(): JSX.Element {
    return (
        <div className="home-page-container">
            <div className="home-page-banner-container">
                <div className="home-page-banner-image-container">
                    <Image
                        src="https://images.unsplash.com/photo-1596460658047-1826d5921c56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="home"
                        fill
                    />
                </div>
                <div className="home-page-banner-content-container">
                    <span className="home-page-banner-content-title">
                        Raise funds for the causes you care about
                    </span>
                    <div className="home-page-banner-content-button-group">
                        <button
                            className="home-page-banner-content-button-primary"
                            type="button"
                        >
                            Find Fundraisers
                        </button>
                        <button
                            className="home-page-banner-content-button-secondary"
                            type="button"
                        >
                            Start Fundraising
                        </button>
                    </div>
                </div>
            </div>
            <CategoryMenu />
            <FundraiserSection category="Category" />
            <FundraiserSection category="Category" />
            <FundraiserSection category="Category" />
            <FundraiserSection category="Category" />
        </div>
    );
}
