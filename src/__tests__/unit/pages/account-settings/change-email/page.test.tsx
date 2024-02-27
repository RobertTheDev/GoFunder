import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChangeEmailPage from '../../../../../app/account-settings/change-email/page';

test('Change Email Page', () => {
    render(<ChangeEmailPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Change Email' })
    ).toBeDefined();
});
