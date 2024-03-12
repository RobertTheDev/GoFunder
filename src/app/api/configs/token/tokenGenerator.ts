import { createId } from "@paralleldrive/cuid2";

export default function generateToken() {
    return createId();
}
