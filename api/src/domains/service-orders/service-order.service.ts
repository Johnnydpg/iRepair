import { prisma } from "../../config/prismaClients.js"
interface createOrderDTO{
    client_id: number
    device: string
    issue: string
    status: string
}
class serviceOrderService{
    async create(data: createOrderDTO){
        if(data.device.trim() === ""){
            throw new Error("É necessário cadastrar um aparelho");
        }
        if(data.issue.trim() === ""){
            throw new Error("É necessário descrever o problema");
        }
        if(data.status.trim() === ""){
            throw new Error("É necessário descrever seu status");
        }
        if(data.status !== "open" && data.status !== "closed" && data.status !==  "in_process"){
            throw new Error("É necessário estar em um estado válido");
        }
        return prisma.order.create({data,});
    }
    async getAll(){
        return prisma.order.findMany();
    }
    async delete(id:number):Promise<void>{
        await prisma.order.delete({where: {id}});
    }
}
export {serviceOrderService}