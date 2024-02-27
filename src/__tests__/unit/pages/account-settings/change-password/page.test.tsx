import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChangePasswordPage from '../../../../../app/account-settings/change-password/page';

test('Change Password Page', () => {
    render(<ChangePasswordPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Change Password' })
    ).toBeDefined();
});
