import { expect, afterEach } from "vitest";
import * as matchers from "jest-extended";
import { cleanup } from "@testing-library/react";

expect.extend(matchers);

afterEach(() => {
    cleanup();
});
