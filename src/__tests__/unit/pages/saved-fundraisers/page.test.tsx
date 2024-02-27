import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import SavedFundraisersPage from '../../../../app/saved-fundraisers/page';

test('Saved Fundraisers Page', () => {
    render(<SavedFundraisersPage />);
    expect(
        screen.getByRole('heading', {
            level: 1,
            name: 'Saved Fundraisers Page'
        })
    ).toBeDefined();
});
