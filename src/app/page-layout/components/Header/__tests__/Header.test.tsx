import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Header from "../index";

vi.mock("next/navigation", () => ({
    usePathname: vi.fn(() => "/"),
    useRouter: vi.fn(() => ({ pathname: "/" })),
}));

describe("Header component", () => {
    it("renders without crashing", () => {
        render(<Header />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("displays correct number of links", () => {
        const { getAllByRole } = render(<Header />);
        const links = getAllByRole("link");
        expect(links).toHaveLength(4);
    });

    it("hides profile menu by default", () => {
        const { queryByTestId } = render(<Header />);
        const profileMenu = queryByTestId("profile-menu");
        expect(profileMenu).toBeNull();
    });
});
