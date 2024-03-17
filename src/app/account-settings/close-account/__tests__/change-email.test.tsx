import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Close account page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Close Account",
        });
    });
});
