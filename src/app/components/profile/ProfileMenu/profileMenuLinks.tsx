import { FaCog, FaHeart } from 'react-icons/fa';

const profileMenuLinks = [
    {
        name: 'Saved Fundraiser',
        path: '/saved-fundraisers',
        icon: <FaHeart />
    },
    {
        name: 'My Fundraisers',
        path: '/my-fundraisers',
        icon: <FaHeart />
    },
    {
        name: 'My Donations',
        path: '/my-donations',
        icon: <FaHeart />
    },
    {
        name: 'Account Settings',
        path: '/account-settings/update-profile',
        icon: <FaCog />
    }
];

export default profileMenuLinks;