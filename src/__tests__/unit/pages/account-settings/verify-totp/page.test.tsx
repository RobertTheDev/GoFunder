import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import VerifyTotpPage from '../../../../../app/account-settings/verify-totp/page';

test('Verify Totp Page', () => {
    render(<VerifyTotpPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Verify Totp' })
    ).toBeDefined();
});
