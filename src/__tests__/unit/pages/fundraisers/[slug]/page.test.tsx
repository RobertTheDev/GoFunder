import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FundraiserPage from '../../../../../app/fundraisers/[slug]/page';

test('Fundraiser Page', () => {
    render(<FundraiserPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Fundraiser Page' })
    ).toBeDefined();
});
