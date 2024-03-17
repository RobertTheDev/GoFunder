"use client";

import { useWindowSize } from "usehooks-ts";
import { ReactConfetti } from "react-confetti";

export default function Confetti() {
    const { width = 0, height = 0 } = useWindowSize();

    return (
        <ReactConfetti
            style={{ zIndex: 40000 }}
            width={width}
            height={height}
            recycle={false}
            initialVelocityX={4}
            initialVelocityY={5}
            friction={0.99}
            wind={0}
            gravity={2}
        />
    );
}
