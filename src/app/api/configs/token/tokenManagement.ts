import { createId } from "@paralleldrive/cuid2";
import { isPast } from "date-fns";

// Generates a random token using cuid.
export function generateToken() {
    return createId();
}

// Create a datetime ten minutes from now for handling token expiry.
export function generateTenMinuteTokenExpiry() {
    return new Date(new Date().getTime() + 10 * 60000);
}

// Takes in a token expiry value and checks that it is not in the past.
export function isTokenExpired(tokenExpiry: Date) {
    return isPast(new Date(tokenExpiry));
}
