import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import UpdateProfilePage from '../../../../../app/account-settings/update-profile/page';

test('Update Profile Page', () => {
    render(<UpdateProfilePage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Update Profile' })
    ).toBeDefined();
});
