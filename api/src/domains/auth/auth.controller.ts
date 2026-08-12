import { Request, Response } from "express";
import { authService } from "./auth.service";


class authController{
    async register(req: Request, res: Response){
        const{email, password} = req.body;
        const service = new authService();
        const user = await service.register(email, password);
        return res.status(201).json(user);
    }
    async login(req: Request, res: Response){
        const{email, password} = req.body;
        const service = new authService();
        const {token, user} = await service.login(email, password);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 60*60*1000,
        })
        return res.status(200).json(user);
    }
    async logout( req: Request, res: Response){
        res.clearCookie('token');
        return res.status(200).json({message: 'Logout realizado com sucesso!'});
    }
}
export {authController}

