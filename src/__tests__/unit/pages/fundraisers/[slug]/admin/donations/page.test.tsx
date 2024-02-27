import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FundraiserDonationsPage from '../../../../../../../app/fundraisers/[slug]/admin/donations/page';

test('Fundraiser Donations Page', () => {
    render(<FundraiserDonationsPage />);
    expect(
        screen.getByRole('heading', {
            level: 1,
            name: 'Fundraiser Donations Page'
        })
    ).toBeDefined();
});
