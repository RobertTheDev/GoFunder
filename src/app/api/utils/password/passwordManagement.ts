import { hash, verify } from 'argon2';

// A distinct 32 character string added to password before hashing.
const pepper = process.env.PEPPER;

// This handler hashed a password with a unique password.
export function hashPassword(password: string): Promise<string> {
    return hash(password + pepper);
}

// This handler checks id the inputted password matches the hashed password from the database.
export function verifyPassword(params: {
    hashedPassword: string;
    inputtedPassword: string;
}): Promise<boolean> {
    const { hashedPassword, inputtedPassword } = params;

    return verify(inputtedPassword + pepper, hashedPassword);
}
