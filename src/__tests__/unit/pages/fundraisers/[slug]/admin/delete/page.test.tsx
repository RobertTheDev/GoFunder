import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DeleteFundraiserPage from '../../../../../../../app/fundraisers/[slug]/admin/delete/page';

test('Delete Fundraiser Page', () => {
    render(<DeleteFundraiserPage />);
    expect(
        screen.getByRole('heading', {
            level: 1,
            name: 'Delete Fundraiser Page'
        })
    ).toBeDefined();
});
