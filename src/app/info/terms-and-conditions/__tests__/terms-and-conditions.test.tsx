import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Terms and conditions page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Terms and Conditions",
        });
    });
});
