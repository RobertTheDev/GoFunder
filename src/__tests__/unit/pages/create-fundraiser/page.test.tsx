import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CreateFundraiserPage from '../../../../app/create-fundraiser/page';

test('Create Fundraiser Page', () => {
    render(<CreateFundraiserPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Create Fundraiser' })
    ).toBeDefined();
});
