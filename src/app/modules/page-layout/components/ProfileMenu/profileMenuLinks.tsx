import { FaCog, FaHandHoldingHeart, FaHeart, FaSketch } from "react-icons/fa";

const profileMenuLinks = [
    {
        name: "Saved Fundraisers",
        path: "/saved-fundraisers",
        icon: <FaHeart />,
    },
    {
        name: "My Fundraisers",
        path: "/my-fundraisers",
        icon: <FaSketch />,
    },
    {
        name: "My Donations",
        path: "/my-donations",
        icon: <FaHandHoldingHeart />,
    },
    {
        name: "Account Settings",
        path: "/account-settings/update-profile",
        icon: <FaCog />,
    },
];

export default profileMenuLinks;
