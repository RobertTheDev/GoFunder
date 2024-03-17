import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Fundraiser page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Fundraiser",
        });
    });
});
