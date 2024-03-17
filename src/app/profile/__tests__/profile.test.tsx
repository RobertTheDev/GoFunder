import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Profile page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Profile",
        });
    });
});
