import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Sign in page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Sign In",
        });
    });
});
