import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Accessibility statement page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Accessiblity Statement",
        });
    });
});
