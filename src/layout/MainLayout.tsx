import { Outlet, Link } from "react-router";
const MainLayout = () =>{
    return(
        <div className="min-h-screen overflow-x-hidden font-[Manrope] bg-slate-100">
        <header className="bg-sky-600 h-30 w-full rounded-md border border-gray-400 shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl">iRepair: o app feito para seus reparos!</h1>
            <h3 className="text-white text-xl">Preencha o forms abaixo</h3>
        </header>
        <aside className="translate-y-15 translate-x-25 bg-sky-600 h-65 w-50 rounded-md border border-gray-400 shadow-lg flex flex-col justify-center items-center text-white text-2xl">
            <h1 className="-translate-y-5">Menu</h1>
            <Link to="/" className="flex items-center justify-center bg-fuchsia-600 rounded-md border border-gray-400 shadow-lg h-10 w-36"> Dashboard </Link>
            <Link to="/Clients" className="translate-y-5 flex items-center justify-center bg-indigo-700 rounded-md border border-gray-400 shadow-lg h-10 w-36"> Clientes </Link>
            <Link to="/ServicesOrders"className="translate-y-8 flex items-center justify-center bg-emerald-600 rounded-md border border-gray-400 shadow-lg h-15 w-36"> Ordens de   Serviços</Link>
        </aside>
        <main className="translate-x-140 -translate-y-51 bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white text-4xl flex items-center justify-center">
            <Outlet/>
        </main>
        </div>
    );
}
export default MainLayout;