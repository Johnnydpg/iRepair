import { prisma } from "../../config/prismaClients";
interface createClientDTO{
    name: string
    phone: string
    email: string
}
class clientService{
    async create(data:createClientDTO){
        if(data.name.trim() === ""){
            throw new Error("É necessário um nome não vazio");
        }
        if(data.phone.trim() === ""){
            throw new Error("É necessário um nome não vazio");
        }
        if(data.email.trim() === ""){
            throw new Error("É necessário um nome não vazio");
        }
        return prisma.client.create({data,});
    }
    async getAll(){
        return prisma.client.findMany();
    }
    async delete(id:number): Promise<void>{
        await prisma.client.delete({where : {id}});
    }
}
export {clientService}