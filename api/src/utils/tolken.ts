import jwt  from "jsonwebtoken";
interface tokenPayload{
    id: number
    email: string
    iat?: number
    exp?: number
}
export function generatetoken(payload:tokenPayload): string{
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn = process.env.JWT_EXPIRES_IN,
    })
}