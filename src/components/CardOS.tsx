import type { User } from "./FormOS";
import { useState } from "react";
const CardOS = (props:{ordens:User[]})=>{
    const [status, setStatus] =  useState<string[]>([]);
    return(
        <div>
            <ul className="translate-x-165 -translate-y-90 flex flex-col gap-8">
                {props.ordens.map((User, index) => (
                    <li key= {index} className=" bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-40 text-lg">
                        <h1 className="translate-x-7 translate-y-3">{User.name}</h1>
                        <h1 className="translate-x-7 translate-y-4">{User.Os}</h1>
                        <h1 className="translate-x-7 translate-y-5">{User.problem}</h1>
                        <select value={status[index]?? "Aberta"}
                            onChange={(e) => {const novoStatus = [...status]; novoStatus[index] = e.target.value; setStatus(novoStatus);}}
                            className={
                            (status[index] ?? "Aberta") === "Aberta"
                            ? "bg-green-400 translate-x-7 translate-y-7"
                            : "bg-red-400 translate-x-7 translate-y-7"
    
                            } >
                            <option className="text-green-500">Aberta</option>
                            <option className="text-red-500">Finalizada</option>
                        </select>
                    </li>))}
                
            </ul>
        </div>
    )
}
export default CardOS;