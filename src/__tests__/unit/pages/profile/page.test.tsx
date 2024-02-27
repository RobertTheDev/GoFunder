import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfilePage from '../../../../app/profile/page';

test('Profile Page', () => {
    render(<ProfilePage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Profile Page' })
    ).toBeDefined();
});
