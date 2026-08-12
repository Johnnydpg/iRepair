import bcrypt from 'bcrypt'
import { prisma } from "../../config/prismaClients";
import { generateToken } from '../../utils/tolken';
import { Apperror } from '../../utils/apperror';

const SALT_ROUNDS = 10;

class authService{
    async register (email:string, password:string){
        const existentUser = await prisma.user.findUnique({where: {email},});
            if(existentUser){
                throw new Apperror("Email de usuário já existente", 409);
            }
        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
        const user = await prisma.user.create({data: {email, password: passwordHash}, select: {id:true, email:true}});
        return user;
    }
    async login(email:string, password:string){
        const user = await prisma.user.findUnique({where:{email},});
        if(!user){
            throw new Apperror("Email ou senha incorretos!", 401);
        }
        const correctPassword = await bcrypt.compare(password, user.password);
        if(!correctPassword){
            throw new Apperror("Email ou senha incorretos!", 401);
        }
        const token = generateToken({id:user.id, email: user.email});
        return {token, user:{id:user.id, email: user.email}};
    }
}
export {authService}