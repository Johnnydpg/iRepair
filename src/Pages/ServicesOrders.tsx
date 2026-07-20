import { useState, useEffect } from "react";
import type { createServiceOrderData, ServiceOrder } from "../types";
import { getAllServiceOrder, createServiceOrder, deleteServiceOrder } from "../services/serviceOrderService";
import { getAllClients } from "../services/clientService";
import type { Client } from "../types";
const ServicesOrders = () =>{
    const [clients, setClients] = useState<Client[]>([]);
    const[sords, setSords] = useState<ServiceOrder[]>([]);
    const[sord, setSord] = useState<createServiceOrderData>({
        clientId: 0,
        device:"",
        issue:"",
        status:"",
    });
    async function createNewServiceOrder(e:React.FormEvent) {
        e.preventDefault();
        console.log("Pedido enviado:", sord);
        const newServiceOrder = await createServiceOrder (sord);
        setSords(prev =>[...prev, newServiceOrder]);
        setSord({
            clientId: 0,
            device: "",
            issue:"",
            status:"",
        });
    }
    useEffect(()=>{
        async function load(){
            const data = await getAllClients();
            setClients(data);
        }
        load();
    }, [])
    useEffect(()=>{
        async function load(){
            const data = await getAllServiceOrder();
            setSords(data);
        }
        load();
    }, [])
    async function handlingDeleteSO(id:number) {
        await deleteServiceOrder(id);
        setSords(prev=>prev.filter(c=>c.id!==id))
    }
    return(
        <main className="translate-x-140 -translate-y-57 bg-sky-600 w-70 h-15 rounded-md border border-gray-400 shadow-lg text-white text-4xl ">
            <h1 className="translate-x-13 translate-y-2">PedidosOS</h1>
            <form onSubmit={createNewServiceOrder}
            className="translate-y-15 -translate-x-50 flex flex-col gap-4 p-6 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-100">
            <label htmlFor="Formulário">
                <h1 className="text-4xl font-bold -translate-y-2 translate-x-10 text-black">Formulário</h1>
            </label>
            <label htmlFor="selectClient">
            </label>
                <select 
                className="border border-black bg-white text-black w-55 h-6 text-base"
                value={sord.clientId}
                onChange={(e) => {
                    console.log("Selecionado:", e.target.value);


                    setSord({
                    ...sord, clientId:Number(e.target.value)
                })}}>
                    <option value={0}>Selecionar cliente</option>
                    {clients.map((client:Client) => (
                        <option key={client.id} value={client.id}>
                                {client.name}
                        </option>
                    ))}
                </select>
            <label htmlFor="device">
                <h2 className="text-xl">Equipamento</h2>
            </label>
                <input
                id="Device"
                type="text"
                placeholder="equipamento"
                className="border border-gray-300 rounded-lg text-black placeholder:text-gray-400 w-65 h-8 text-lg -translate-y-6"
                onChange={(e) => setSord({...sord, device:e.target.value})}/>
            <label htmlFor="issue">
                <h2 className="text-xl">Problema</h2>
            </label>
                <input
                id="Issue"
                type="text"
                placeholder="Defeito"
                className="border border-gray-300 rounded-lg text-black placeholder:text-gray-400 w-65 h-8 text-lg -translate-y-12"
                onChange={(e) => setSord({...sord, issue:e.target.value})}/>
            <label htmlFor="status">
                <h2 className="text-xl">Status</h2>
            </label>
                <input
                id="Status"
                type="text"
                placeholder="Status"
                className="border border-gray-300 rounded-lg text-black placeholder:text-gray-400 w-65 h-8 text-lg -translate-y-18"
                onChange={(e) => setSord({...sord, status:e.target.value})}/>
            
            <input type="submit" value="cadastrar"
            className="border border-gray-300 rounded-lg -translate-y-16 translate-x-3 w-60 h-15 bg-sky-600"></input>
            </form>
            <ul className="translate-x-65 -translate-y-85 flex flex-col gap-8">
                {sords.map(so=>(
                    <li key={so.id} className=" bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-40 text-base">
                            <p className="translate-y-5 translate-x-5 text-base text-black">ClienteID: {so.client_id}</p>
                            <p className="translate-y-5 translate-x-5 text-base text-black">Equipamento: {so.device}</p>
                            <p className="translate-y-5 translate-x-5 text-base text-black">Defeito: {so.issue}</p>
                            <p className={`w-30 h-10 rounded-lg flex items-center justify-center translate-y-7 translate-x-30 text-white
                            ${so.status === "open" ? "bg-green-500" : "bg-red-500"}`}>
                            {so.status}</p>
                        <button onClick={()=> handlingDeleteSO(so.id)}
                        className="bg-red-600 rounded-xl -translate-y-25 translate-x-70">DELETAR</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default ServicesOrders;