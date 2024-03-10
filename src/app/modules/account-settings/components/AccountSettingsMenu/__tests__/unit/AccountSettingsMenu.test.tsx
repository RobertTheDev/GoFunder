import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountSettingsMenu from "../..";
import accountSettingsLinks from "../../accountSettingsLinks";

jest.mock("next/navigation", () => ({
    usePathname: () => "/account-settings/update-profile",
}));

test("it matches snapshot", () => {
    const { container } = render(<AccountSettingsMenu />);
    expect(container).toMatchSnapshot();
});

test('it returns a title with the text "Account Settings"', () => {
    const { getByText } = render(<AccountSettingsMenu />);

    const title = getByText("Account Settings");

    expect(title).toBeInTheDocument();
});

test("it renders the correct links in the menu", () => {
    const { getByText } = render(<AccountSettingsMenu />);

    accountSettingsLinks.map(({ name }) =>
        expect(getByText(name)).toBeInTheDocument(),
    );
});

test("active link has correct class", () => {
    const { getByText } = render(<AccountSettingsMenu />);
    const activeLink = getByText("Update Profile");
    // eslint-disable-next-line sonarjs/no-duplicate-string
    expect(activeLink).toHaveClass("account-settings-menu-link-active");
});

test("navigation links have correct href attributes", () => {
    const { getByText } = render(<AccountSettingsMenu />);
    accountSettingsLinks.map(({ name, path }) =>
        expect(getByText(name).getAttribute("href")).toBe(path),
    );
});

test("inactive links do not have active class", () => {
    const { getByText } = render(<AccountSettingsMenu />);
    accountSettingsLinks.forEach(({ name }) => {
        const link = getByText(name);
        if (name !== "Update Profile") {
            expect(link).not.toHaveClass("account-settings-menu-link-active");
        } else {
            expect(link).toHaveClass("account-settings-menu-link-active");
        }
    });
});
