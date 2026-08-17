import { Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { serviceOrderService } from "./service-order.service.js";

class serviceOrderController{
    async create(req: Request, res: Response){
        try{
            const{client_id, device, issue, status} = req.body;
            const service = new serviceOrderService;
            const order = await service.create({client_id, device, issue, status});
            return res.status(201).json(order);
        }
        catch(error){
            if(error instanceof Error)
                return res.status(400).json({erro: error.message});
            return res.status(500).json({erro: "Erro desconhecido"});
        }
    }
    async getAll(req: Request, res: Response){
        try{
            const service = new serviceOrderService;
            const order = await service.getAll();
            return res.status(200).json(order);
        }
        catch(error){
            if(error instanceof Error)
                return res.status(400).json({erro: error.message});
            return res.status(500).json({erro: "Erro desconhecido"});
        }
    }
    async delete(req: Request, res: Response){
        try{
            const {id} = req.params;
            const idNumber = Number(id);
            const service = new serviceOrderService;
            const order = await service.delete(idNumber);
            return res.status(204).json(order);
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
export {serviceOrderController}