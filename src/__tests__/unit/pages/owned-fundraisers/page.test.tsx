import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import OwnedFundraisersPage from '../../../../app/owned-fundraisers/page';

test('Owned Fundraisers Page', () => {
    render(<OwnedFundraisersPage />);
    expect(
        screen.getByRole('heading', {
            level: 1,
            name: 'Owned Fundraisers Page'
        })
    ).toBeDefined();
});
