import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../../../app/[...404]/page';

test('Not Found Page', () => {
    render(<NotFoundPage />);
    expect(
        screen.getByRole('heading', { level: 1, name: 'Not Found' })
    ).toBeDefined();
});
