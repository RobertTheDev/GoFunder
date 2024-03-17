import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Delete fundraiser page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Delete Fundraiser",
        });
    });
});
