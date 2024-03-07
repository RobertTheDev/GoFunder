import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRef } from 'react';
import ProfileMenu from '../..';
import profileMenuLinks from '../../profileMenuLinks';

jest.mock('next/navigation', () => ({
    usePathname: () => '/saved-fundraisers'
}));

test('it matches snapshot', () => {
    const { container } = render(<ProfileMenu />);
    expect(container).toMatchSnapshot();
});

test('it returns a title with the text "Profile Menu"', () => {
    const { getByText } = render(<ProfileMenu />);

    const title = getByText('Profile Menu');

    expect(title).toBeInTheDocument();
});

test('it renders the correct links in the menu', () => {
    const { getByText } = render(<ProfileMenu />);

    profileMenuLinks.map(({ name }) =>
        expect(getByText(name)).toBeInTheDocument()
    );
});

test('active link has correct class', () => {
    const { getByText } = render(<ProfileMenu />);
    const activeLink = getByText('Saved Fundraisers');
    // eslint-disable-next-line sonarjs/no-duplicate-string
    expect(activeLink).toHaveClass('profile-menu-link-active');
});

test('navigation links have correct href attributes', () => {
    render(<ProfileMenu />);

    profileMenuLinks.forEach(({ name, path }) => {
        const link = screen.getByText(name).closest('a');
        expect(link).toHaveAttribute('href', path);
    });
});

test('inactive links do not have active class', () => {
    const { getByText } = render(<ProfileMenu />);
    profileMenuLinks.forEach(({ name }) => {
        const link = getByText(name);
        if (name !== 'Saved Fundraisers') {
            expect(link).not.toHaveClass('profile-menu-link-active');
        } else {
            expect(link).toHaveClass('profile-menu-link-active');
        }
    });
});

test('renders sign out button with correct icon', () => {
    const { getByText } = render(<ProfileMenu />);
    const signOutButton = getByText('Sign Out');
    expect(signOutButton).toBeInTheDocument();
    expect(signOutButton.querySelector('svg')).toBeInTheDocument();
});

test('forwards ref to div element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<ProfileMenu ref={ref} />);
    expect(ref.current).toBeInTheDocument();
});

test('renders profile menu correctly', () => {
    const { getByText } = render(<ProfileMenu />);
    expect(getByText('Profile Menu')).toBeInTheDocument();
    profileMenuLinks.forEach(({ name }) => {
        expect(getByText(name)).toBeInTheDocument();
    });
    expect(getByText('Sign Out')).toBeInTheDocument();
});
