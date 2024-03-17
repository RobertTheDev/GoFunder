import { useState } from "react";

export default function useSheet() {
    const [sheetActive, setSheetActive] = useState(false);

    function closeSheet() {
        setSheetActive(false);
    }

    function openSheet() {
        setSheetActive(true);
    }

    function toggleSheet() {
        setSheetActive(!sheetActive);
    }

    return { sheetActive, closeSheet, openSheet, toggleSheet };
}
