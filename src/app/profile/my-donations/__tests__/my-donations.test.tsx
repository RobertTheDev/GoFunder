import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("My donations page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "My Donations",
        });
    });
});
