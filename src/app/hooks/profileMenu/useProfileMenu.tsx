import { MutableRefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function useProfileMenu() {
    const [profileMenuActive, setProfileMenuActive] = useState<boolean>(false);

    const profileMenuRef: MutableRefObject<HTMLDivElement | null> =
        useRef<HTMLDivElement | null>(null);

    function toggleProfileMenu(): void {
        setProfileMenuActive(!profileMenuActive);
    }

    function closeProfileMenu(): void {
        setProfileMenuActive(false);
    }

    useOnClickOutside(profileMenuRef, closeProfileMenu);

    return {
        profileMenuActive,
        profileMenuRef,
        toggleProfileMenu,
    };
}
