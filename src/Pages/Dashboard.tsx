import { useState, useEffect } from "react";
import { getAllClients } from "../services/clientService";
import { getAllServiceOrder } from "../services/serviceOrderService";
import type { Client } from "../types";
import type { ServiceOrder} from "../types";
const Dashboard = () =>{
    const[clients, setClients] = useState<Client[]>([]);
    const[sords, setSords] = useState<ServiceOrder[]>([]);
    useEffect(()=>{
        async function load() {
            const data = await getAllClients();
            setClients(data);
        }
        load();
    }, [])
    useEffect(()=>{
        async function load() {
            const data = await getAllServiceOrder();
            setSords(data);
        }
        load();
    })
    return(
        <main className="translate-x-140 -translate-y-57 bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white text-4xl flex items-center justify-center">
            <h1 className="translate-x-45"> Dashboard </h1>
            <ul className="-translate-x-22 translate-y-85 flex flex-col gap-8">{sords.map((so)=>{
                const client = clients.find(c=>c.id === so.client_id);
                return(
                    <li key={so.id}
                    className= " bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-40 text-base">
                        <h2 className="text-black translate-x-4 translate-y-3">Cliente: {client?.name}</h2>
                        <p className="text-black translate-x-4 translate-y-3">ClienteID: {so.client_id}</p>
                        <p className="text-black translate-x-4 translate-y-3">Aparelho: {so.device}</p>
                        <p className="text-black translate-x-4 translate-y-3">Defeito: {so.issue}</p>
                        <p className= {`w-30 h-10 rounded-lg flex items-center justify-center translate-y-3 translate-x-30 text-white
                            ${so.status === "open" ? "bg-green-500" : "bg-red-500"}`}>{so.status}</p>
                    </li>
                )
            })}
            </ul>
        </main>
    );
}
export default Dashboard;