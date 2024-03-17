import { describe, it, expect } from "vitest";
import { metadata } from "../page";

describe("Not found page", () => {
    it("should have correct metadata", () => {
        expect(metadata).toEqual({
            title: "Change Email",
        });
    });
});
