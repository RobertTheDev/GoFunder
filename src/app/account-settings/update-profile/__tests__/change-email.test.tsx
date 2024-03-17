import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Update profile page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Update Profile",
        });
    });
});
