import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Send password reset page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Send Password Reset",
        });
    });
});
