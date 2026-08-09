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
    const[isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);
        async function load(){
            const data = await getAllClients();
            setClients(data);
            setIsLoading(false);
        }
        load();
    }, [])
    async function handlingDeleteClient(id:number){
        await deleteClient(id);
        setClients(prev=>prev.filter(c=>c.id!==id))
    }
    return  isLoading? <div className="flex items-center justify-center text-4xl bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white">Carregando...</div>:(
        <main className="flex flex-col items-center ">
            <div className= "bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white text-4xl flex items-center justify-center">Clientes</div>
            <div className="py-4 flex gap-20">
                <form onSubmit={createNewClient}
                className=" grid grid-rows justify-center items-center bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-100">
                <label htmlFor="Formulário">
                    <h1 className="mx-15 text-4xl font-bold">Formulário</h1>
                </label>
                <label htmlFor="Nome">
                    <h2 className=" text-xl">Nome</h2>
                </label>
                <input 
                id="Nome"
                type="text"
                placeholder="Nome"
                className="border border-gray-300 rounded-lg placeholder:text-gray-400 w-70"
                 value={client.name} onChange={(e)=>setClient({...client, name:e.target.value})}
                />
                 <label htmlFor="Phone">
                    <h2 className=" text-xl">Telefone</h2>
                </label>
                <input 
                 id="Phone"
                 type="text"
                 placeholder="Telefone"
                className="border border-gray-300 rounded-lg placeholder:text-gray-400 w-70"
                value={client.phone} onChange={(e)=>setClient({...client, phone:e.target.value})}
                />
                <label htmlFor="Email">
                   <h2 className=" text-xl">Email</h2>
                 </label>
                <input 
                 id="Email"
                 type="text"
                placeholder="Email"
                className="border border-gray-300 rounded-lg placeholder:text-gray-400 w-70"
                value={client.email} onChange={(e)=>setClient({...client, email:e.target.value})}
                />
                <input type="submit" value="cadastrar"
                className="translate-x-6 border border-gray-300 rounded-lg w-60 h-15 bg-sky-600 text-white text-3xl"></input>
                </form>

                <ul className="flex flex-col gap-8">
                     {clients.map(client=>(
                        <li key={client.id} className=" grid items-center justify center grid-rows-4 py-3 px-4 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-40 text-lg">
                            <p className="">Nome: {client.name}</p>
                            <p className="">Telefone: {client.phone}</p>
                            <p className="">Email:{client.email}</p>
                            <button onClick={()=>handlingDeleteClient(client.id)}
                            className="bg-red-600 rounded-xl w-25 translate-x-24">DELETAR</button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
export default Clients;