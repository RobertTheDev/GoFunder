import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SetUpTotpPage from '../../../../../app/account-settings/set-up-totp/page';

test('Set Up Totp Page', () => {
    render(<SetUpTotpPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Set Up Totp' })
    ).toBeDefined();
});
