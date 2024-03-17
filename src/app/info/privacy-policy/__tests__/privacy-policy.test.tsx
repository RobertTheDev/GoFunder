import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Privacy policy page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Privacy Policy",
        });
    });
});
