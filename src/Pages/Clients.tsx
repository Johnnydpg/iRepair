import { useState, useEffect } from "react";
import { getAllClients, createClient, deleteClient } from "../services/clientService";
import type { CreateClientData, Client } from "../types";
const Clients = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const[client, setClient] = useState<CreateClientData>({
        name: "",
        phone: "",
        email: "",
    });
    
    async function createNewClient(e: React.FormEvent) {
        e.preventDefault();
        const newclient = await createClient(client);
        setClients(prev => [...prev, newclient]);

        setClient({
            name: "",
            phone: "",
            email: "",
    });
    }
    useEffect(()=>{
        async function load(){
            const data = await getAllClients();
            setClients(data);
        }
        load();
    }, [])
    async function handlingDeleteClient(id:number){
        await deleteClient(id);
        setClients(prev=>prev.filter(c=>c.id!==id))
    }
    return(
        <main >
            <h1 className="translate-x-140 -translate-y-57 bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white text-4xl flex items-center justify-center">Clientes</h1>
            <form onSubmit={createNewClient}
            className="-translate-y-53 translate-x-90 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-100">
            <label htmlFor="Formulário">
                <h1 className="text-4xl font-bold translate-y-10 translate-x-24">Formulário</h1>
            </label>
            <label htmlFor="Nome">
                <h2 className="translate-x-8 translate-y-12 text-xl">Nome</h2>
            </label>
            <input 
            id="Nome"
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded-lg translate-x-8 translate-y-15 placeholder:text-gray-400 w-70"
            value={client.name} onChange={(e)=>setClient({...client, name:e.target.value})}
            />
            <label htmlFor="Phone">
                <h2 className="translate-x-8 translate-y-15 text-xl">Telefone</h2>
            </label>
            <input 
            id="Phone"
            type="text"
            placeholder="Telefone"
            className="border border-gray-300 rounded-lg translate-x-8 translate-y-16 placeholder:text-gray-400 w-70"
            value={client.phone} onChange={(e)=>setClient({...client, phone:e.target.value})}
            />
            <label htmlFor="Email">
                <h2 className="translate-x-8 translate-y-15 text-xl">Email</h2>
            </label>
            <input 
            id="Email"
            type="text"
            placeholder="Email"
            className="border border-gray-300 rounded-lg translate-x-8 translate-y-17 placeholder:text-gray-400 w-70"
            value={client.email} onChange={(e)=>setClient({...client, email:e.target.value})}
            />
            <input type="submit" value="cadastrar"
            className="border border-gray-300 rounded-lg translate-y-25 translate-x-14 w-60 h-15 bg-sky-600"></input>
            </form>
            <ul className="translate-x-195 -translate-y-153 flex flex-col gap-8">
                {clients.map(client=>(
                    <li key={client.id} className=" bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-40 text-lg">
                        <p className="translate-y-5 translate-x-5">Nome: {client.name}</p>
                        <p className="translate-y-5 translate-x-5">Telefone: {client.phone}</p>
                        <p className="translate-y-5 translate-x-5">Email:{client.email}</p>
                        <button onClick={()=>handlingDeleteClient(client.id)}
                        className="bg-red-600 rounded-xl translate-y-5 translate-x-5">DELETAR</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default Clients;