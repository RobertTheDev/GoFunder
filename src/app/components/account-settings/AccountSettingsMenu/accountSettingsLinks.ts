const accountSettingsLinks: {
    name: string;
    path: string;
}[] = [
    { name: 'Update Profile', path: '/update-profile' },
    { name: 'Change Email', path: '/change-email' },
    { name: 'Change Password', path: '/change-password' },
    { name: 'Close Account', path: '/close-account' },
    { name: 'Set Up TOTP', path: '/set-up-totp' }
];

export default accountSettingsLinks;
