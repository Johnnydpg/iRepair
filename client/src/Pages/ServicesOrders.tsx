import { useState, useEffect } from "react";
import type { createServiceOrderData, ServiceOrder } from "../types";
import { getAllServiceOrder, createServiceOrder, deleteServiceOrder } from "../services/serviceOrderService";
import { getAllClients } from "../services/clientService";
import type { Client } from "../types";
const ServicesOrders = () =>{
    const [clients, setClients] = useState<Client[]>([]);
    const[sords, setSords] = useState<ServiceOrder[]>([]);
    const[sord, setSord] = useState<createServiceOrderData>({
        client_id: 0,
        device:"",
        issue:"",
        status:"",
    });
    const [isLoading, setIsLoading] = useState(false);
    async function createNewServiceOrder(e:React.FormEvent) {
        e.preventDefault();
        console.log("Pedido enviado:", sord);
        const newServiceOrder = await createServiceOrder (sord);
        setSords(prev =>[...prev, newServiceOrder]);

        setSord({
            client_id: 0,
            device: "",
            issue:"",
            status:"",
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
    useEffect(()=>{
        setIsLoading(true);
        async function load(){
            const data = await getAllServiceOrder();
            setSords(data);
            setIsLoading(false);
        }
        load();
    }, [])
    async function handlingDeleteSO(id:number) {
        await deleteServiceOrder(id);
        setSords(prev=>prev.filter(c=>c.id!==id))
    }
    return isLoading ? <div className="flex items-center justify-center text-4xl bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white">Carregando...</div>:(
        <main className="flex flex-col items-center">
            <div className=" bg-sky-600 w-70 h-15 rounded-md border border-gray-400 shadow-lg text-white text-4xl flex items-center justify-center">PedidosOS</div>
            <div className="py-4 flex gap-20">
                <form onSubmit={createNewServiceOrder}
                className="grid grid-rows justify-center items-center bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-100">
                <label htmlFor="Formulário">
                    <h1 className="mx-15 text-4xl font-bold text-black">Formulário</h1>
                </label>
                <label htmlFor="selectClient">
                </label>
                    <select 
                    className="border border-black bg-white text-black w-55 h-6 text-base"
                    value={sord.client_id}
                    onChange={(e) => {
                        console.log("Selecionado:", e.target.value);


                        setSord({
                        ...sord, client_id:Number(e.target.value)
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
                    className="border border-gray-300 rounded-lg text-black placeholder:text-gray-400 w-65 h-8 text-lg"
                    onChange={(e) => setSord({...sord, device:e.target.value})}/>
                 <label htmlFor="issue">
                     <h2 className="text-xl">Problema</h2>
                </label>
                    <input
                    id="Issue"
                    type="text"
                    placeholder="Defeito"
                    className="border border-gray-300 rounded-lg text-black placeholder:text-gray-400 w-65 h-8 text-lg"
                    onChange={(e) => setSord({...sord, issue:e.target.value})}/>
                <label htmlFor="status">
                    <h2 className="text-xl">Status</h2>
                </label>
                    <input
                    id="Status"
                    type="text"
                    placeholder="Status"
                    className="border border-gray-300 rounded-lg text-black placeholder:text-gray-400 w-65 h-8 text-lg"
                    onChange={(e) => setSord({...sord, status:e.target.value})}/>
            
                <input type="submit" value="cadastrar"
                className="translate-x-6 border border-gray-300 rounded-lg w-60 h-15 bg-sky-600 text-white text-3xl flex items-center justify-center"></input>
                </form>
                <ul className="flex flex-col gap-8">
                    {sords.map(so=>(
                        <li key={so.id} className="grid items-center justify center grid-rows-4 py-2 px-4 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-45 text-lg">
                                <p className="text-base text-black">ClienteID: {so.client_id}</p>
                                <p className="text-base text-black">Equipamento: {so.device}</p>
                                <p className="text-base text-black">Defeito: {so.issue}</p>
                                <p className={`w-30 h-10 translate-x-25 rounded-lg flex items-center justify-center text-white
                                ${so.status === "open" ? "bg-green-500" : "bg-red-500"}`}>
                                {so.status}</p>
                            <button onClick={()=> handlingDeleteSO(so.id)}
                            className="bg-red-600 rounded-xl w-25">DELETAR</button>
                        </li>
                ))}
            </ul>
            </div>
        </main>
    );
}
export default ServicesOrders;