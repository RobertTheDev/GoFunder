import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Create fundraiser page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Create Fundraiser",
        });
    });
});
