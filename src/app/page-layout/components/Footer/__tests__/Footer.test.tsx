import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../index";

describe("Footer component", () => {
    it("renders without crashing", () => {
        render(<Footer />);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("displays correct number of links", () => {
        const { getAllByRole } = render(<Footer />);
        const links = getAllByRole("link");
        expect(links).toHaveLength(3);
    });

    it("displays correct copyright year", () => {
        const { getByText } = render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(getByText(`©${currentYear} GoFunder`)).toBeInTheDocument();
    });
});
