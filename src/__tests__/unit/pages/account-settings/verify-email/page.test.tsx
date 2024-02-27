import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import VerifyEmailPage from '../../../../../app/account-settings/verify-email/page';

test('Verify Email Page', () => {
    render(<VerifyEmailPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Verify Email' })
    ).toBeDefined();
});
