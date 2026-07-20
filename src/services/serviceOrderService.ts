import { api } from "./api";
import type { ServiceOrder, createServiceOrderData } from "../types";

export async function getAllServiceOrder(): Promise<ServiceOrder[]>{
    const response = await api.get<ServiceOrder[]>('/service-orders')
    return response.data;
}
export async function createServiceOrder(data:createServiceOrderData): Promise<ServiceOrder>{
    const response = await api.post<ServiceOrder>('/service-orders', data);
    return response.data;
}
export async function deleteServiceOrder(id:number): Promise<void>{
    await api.delete(`/service-orders/${id}`);
}