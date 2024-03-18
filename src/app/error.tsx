"use client";

import ErrorTemplate from "@/app/templates/error";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.error(error);
    }, [error]);

    return <ErrorTemplate reset={reset} />;
}
