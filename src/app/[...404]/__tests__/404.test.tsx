import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFoundPage, { metadata } from "../page";

describe("Not found page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Not Found",
        });
    });

    it("displays correct title", () => {
        render(<NotFoundPage />);
        expect(
            screen.getByText("404 - Not Found", { selector: "h1" }),
        ).toBeDefined();
    });

    it("should render correct image src and alt", () => {
        const { getByAltText } = render(<NotFoundPage />);

        const imageElement = getByAltText("Not found");
        expect(imageElement).toBeDefined();
        expect(imageElement.getAttribute("src")).toBe("/404.svg");
    });
});
