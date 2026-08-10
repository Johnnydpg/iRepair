import type { Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { clientService } from "./client.service";
class clientController{
    async create(req: Request, res: Response){
        try{
            const{name, phone, email} = req.body;
            const service = new clientService;
            const client = await service.create({name, phone, email});
            return res.status(201).json(client);
        }
        catch(error){
            if(error instanceof Error)
                return res.status(400).json({erro: error.message});
            return res.status(500).json({erro: "Erro desconhecido"});
        }
    }
    async getAll(req: Request, res: Response){
        try{
            const service = new clientService;
            const client = service.getAll();
            return res.status(200).json(client);
        }
        catch(error){
            if(error instanceof Error){
                return res.status(400).json({erro: error.message});
            }
            return res.status(500).json({erro:"Erro desconhecido"});
        }
    }
    async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            const idNumber = Number(id);
            const service = new clientService;
            const client = service.delete(idNumber);
            return res.status(204).json(client);
        }
        catch(error){
            if(error instanceof PrismaClientKnownRequestError && error.code === 'P2025'){
                return res.status(404).json({erro: "Tarefa não encontrada"});
            }
            if(error instanceof Error){
                return res.status(400).json({erro: error.message});
            }
            return res.status(500).json({erro:"Erro desconhecido"});
        }
    }
}
export {clientController}