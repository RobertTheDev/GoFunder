import Image from 'next/image';

export default function NotFoundTemplate() {
    return (
        <div className="not-found-page-container">
            <h1 className="not-found-page-title">404 - Not Found</h1>
            <div className="not-found-page-image-container">
                <Image src="/404.svg" alt="404" fill />
            </div>
        </div>
    );
}
