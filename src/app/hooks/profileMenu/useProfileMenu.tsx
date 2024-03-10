import { MutableRefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function useProfileMenu(): {
    profileMenuActive: boolean;
    profileMenuRef: MutableRefObject<HTMLDivElement | null>;
    toggleProfileMenu: () => void;
} {
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
