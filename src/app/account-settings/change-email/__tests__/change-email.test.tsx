import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Change email page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Change Email",
        });
    });
});
