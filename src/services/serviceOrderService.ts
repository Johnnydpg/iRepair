import { api } from "./api";
import type { Pedido, createPedidoData } from "../types";

export async function getAllPedidos(): Promise<Pedido[]>{
    const response = await api.get<Pedido[]>('/service-orders')
    return response.data;
}
export async function createPedido(data:createPedidoData): Promise<Pedido>{
    const response = await api.post<Pedido>('/service-orders', data);
    return response.data;
}
export async function deletePedido(id:number): Promise<void>{
    await api.delete(`/service-orders/${id}`);
}