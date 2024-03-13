// We hash and verify passwords using argon2 with a salt and pepper strategy.

import { hash, verify } from "argon2"; // Argon 2 library is an algorithim used to hash passwords.
import { randomBytes } from "crypto"; // Generates secure random data for salting.

const salt = randomBytes(32); // Generates a random salt to add to password input.
const pepper = process.env.PEPPER as string; // Random word added to password before hashing.

// This handler hashes a user's password using argon2.
export function hashPassword(params: { password: string }) {
    const { password } = params;

    return hash(password + pepper, { salt });
}

// This handler checks user's inputted password with the hashed password in the db.
export function verifyPassword(params: {
    hashedPassword: string;
    password: string;
}) {
    const { hashedPassword, password } = params;

    return verify(hashedPassword, password + pepper);
}
