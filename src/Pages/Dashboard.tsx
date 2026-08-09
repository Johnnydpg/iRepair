import { useState, useEffect } from "react";
import { getAllClients } from "../services/clientService";
import { getAllServiceOrder } from "../services/serviceOrderService";
import type { Client } from "../types";
import type { ServiceOrder} from "../types";
const Dashboard = () =>{
    const[clients, setClients] = useState<Client[]>([]);
    const[sords, setSords] = useState<ServiceOrder[]>([]);
    const[isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        async function load() {
            const data = await getAllClients();
            setClients(data);
            setIsLoading(false);
        }
        load();
    }, [])
    useEffect(()=>{
        setIsLoading(true);
        async function load() {
            const data = await getAllServiceOrder();
            setSords(data);
            setIsLoading(false);
        }
        load();
    }, [])
    return isLoading? <div className="flex items-center justify-center text-4xl bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white">Carregando...</div>:(
        <main className="flex flex-col items-center justify-center gap-8">
            <div className="bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white text-4xl flex items-center justify-center -translate-x-10"> Dashboard </div>
            <ul className="-translate-x-8 grid grid-cols-3 grid-rows-5 gap-5">{sords.map((so)=>{
                const client = clients.find(c=>c.id === so.client_id);
                return(
                    <li key={so.id}
                    className= "grid items-center justify-center grid-rows-6 py-3 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-40 text-base">
                        <h2 className="text-black">Cliente: {client?.name}</h2>
                        <p className="text-black">ClienteID: {so.client_id}</p>
                        <p className="text-black">Aparelho: {so.device}</p>
                        <p className="text-black">Defeito: {so.issue}</p>
                        <p className= {`w-30 h-10 translate-y-3 rounded-lg flex items-center justify-center text-white
                            ${so.status === "open" ? "bg-green-500" : "bg-red-500"}`}>{so.status}</p>
                    </li>
                )
            })}
            </ul>
        </main>
    );
}
export default Dashboard;