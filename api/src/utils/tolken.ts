import jwt  from "jsonwebtoken";
interface tokenPayload{
    id: number
    email: string
    iat?: number
    exp?: number
}
export function generateToken(payload:tokenPayload): string{
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    });
}
export function verifyTolken(token:string): tokenPayload{
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as tokenPayload;
    return decoded;
}