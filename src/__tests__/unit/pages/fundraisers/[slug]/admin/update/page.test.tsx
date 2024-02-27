import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import UpdateFundraiserPage from '../../../../../../../app/fundraisers/[slug]/admin/update/page';

test('Update Fundraiser Page', () => {
    render(<UpdateFundraiserPage />);
    expect(
        screen.getByRole('heading', {
            level: 1,
            name: 'Update Fundraiser Page'
        })
    ).toBeDefined();
});
