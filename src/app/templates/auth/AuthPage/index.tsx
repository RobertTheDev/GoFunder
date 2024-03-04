import { ReactNode } from 'react';

export default function AuthPageTemplate({
    children
}: {
    children: ReactNode;
}) {
    return <div className="auth-page-container">{children}</div>;
}
