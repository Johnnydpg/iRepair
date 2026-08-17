import { Request, Response, NextFunction } from "express";
import { verifyTolken } from "../utils/tolken.js";

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const token = req.cookies?.token;

    if(!token){
        return res.status(401).json({error: 'Token inválido'})
    }
    try{
        const payload = verifyTolken(token)
        req.user = {id: payload.id, email: payload.email}
        return next();
    }
    catch{
        return res.status(401).json({error: "Token inválido"});
    }
}