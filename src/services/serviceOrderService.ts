import { api } from "./api";
import type { ServiceOrder, createServiceOrderData } from "../types";

export async function getAllServiceOrder(): Promise<ServiceOrder[]>{
    try{
        const response = await api.get<ServiceOrder[]>('/service-orders')
        return response.data;
    }
    catch(error){
        console.error("Erro na API:", error);
        throw error;
    }
}
export async function createServiceOrder(data:createServiceOrderData): Promise<ServiceOrder>{
    try{
        const response = await api.post<ServiceOrder>('/service-orders', data);
        return response.data;
    }
    catch(error){
        console.error("Erro na API:", error)
        throw error;
    }
}
export async function deleteServiceOrder(id:number): Promise<void>{
    try{
        await api.delete(`/service-orders/${id}`);
    }
    catch(error){
        console.error("Erro na API:", error);
    }
}