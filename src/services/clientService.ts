import { api } from "../services/api";
import type { Client, CreateClientData } from '../types';

export async function getAllClients(): Promise<Client[]> {
  try{
    const response = await api.get<Client[]>('/clients');
    return response.data;
  }
  catch(error){
    console.error("Erro na API:",error);
    throw error;
  }
}

export async function createClient(data: CreateClientData): Promise<Client> {
  try{
    const response = await api.post<Client>('/clients', data);
    return response.data;
  }
  catch(error){
    console.error("Erro na API:", error);
    throw error;
  }
}

export async function deleteClient(id: number): Promise<void> {
  try{
    await api.delete(`/clients/${id}`);
  }
  catch(error){
    console.error("Erro na API:", error);
  }
}