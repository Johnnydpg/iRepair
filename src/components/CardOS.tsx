import type { User } from "./FormOS";
const CardOS = (props:{ordens:User[]})=>{

    return(
        <div>
            <ul>
                {props.ordens.map((User) => (
                    <li className="translate-x-120 -translate-y-90 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-32">
                        <h1 className="translate-x-7 translate-y-3">{User.name}</h1>
                        <h1 className="translate-x-7 translate-y-4">{User.Os}</h1>
                        <h1 className="translate-x-7 translate-y-5">{User.problem}</h1>
                        <select className="translate-x-6 translate-y-5">
                            <option>Aberta</option>
                            <option>Finalizada</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CardOS;