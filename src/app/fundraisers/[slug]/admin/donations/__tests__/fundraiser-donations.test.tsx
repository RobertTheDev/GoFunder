import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Fundraiser donations page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Fundraiser Donations",
        });
    });
});
