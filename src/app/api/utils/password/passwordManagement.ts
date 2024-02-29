import { hash, verify } from 'argon2';

export function hashPassword(password: string): Promise<string> {
    return hash(password);
}

export function verifyPassword(params: {
    hashedPassword: string;
    inputtedPassword: string;
}): Promise<boolean> {
    const { hashedPassword, inputtedPassword } = params;

    return verify(inputtedPassword, hashedPassword);
}
