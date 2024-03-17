import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Make a donation page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Make A Donation",
        });
    });
});
