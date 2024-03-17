"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PanInfo, motion, useAnimation } from "framer-motion";
import useSheet from "@/app/hooks/sheet/useSheet";

export default function SheetPage() {
    const { sheetActive, closeSheet, openSheet } = useSheet();

    const controls = useAnimation();

    useEffect(() => {
        if (!sheetActive) {
            controls.start("hidden");
        } else if (sheetActive) {
            controls.start("visible");
        }
    }, [controls, sheetActive]);

    function onDragEnd(
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) {
        const shouldClose = info.velocity.y >= 20;
        if (shouldClose) {
            controls.start("hidden");
            closeSheet();
        } else {
            controls.start("visible");
            openSheet();
        }
    }

    return (
        <motion.div
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0}
            animate={controls}
            onDragEnd={onDragEnd}
            transition={{
                type: "spring",
                damping: 40,
                stiffness: 400,
            }}
            initial="hidden"
            variants={{
                visible: { y: 0 },
                hidden: { y: "100%" },
            }}
            className={styles.sheetContainer}
        >
            <div className={styles.sheetTabContainer}>
                <div className={styles.sheetTab} />
            </div>
            <p>Sheet</p>
            <button onClick={closeSheet}>Close</button>
        </motion.div>
    );
}
