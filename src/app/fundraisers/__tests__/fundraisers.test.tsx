import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Fundraisers page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Fundraisers",
        });
    });
});
