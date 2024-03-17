import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Saved fundraisers page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Saved Fundraisers",
        });
    });
});
