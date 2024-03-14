"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function ProgressBar() {
    return (
        <AppProgressBar
            height="4px"
            color="#00a95c"
            options={{ showSpinner: false }}
            shallowRouting
            delay={250}
        />
    );
}
