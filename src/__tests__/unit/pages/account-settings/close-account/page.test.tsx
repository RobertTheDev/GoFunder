import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CloseAccountPage from '../../../../../app/account-settings/close-account/page';

test('Close Account Page', () => {
    render(<CloseAccountPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Close Account' })
    ).toBeDefined();
});
