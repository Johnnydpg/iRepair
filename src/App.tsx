import "./index.css";
import Header from "./components/Header";
import FormOS from "./components/FormOS";
import CardOS from "./components/CardOS";
import type { User } from "./components/FormOS";
import { useState } from "react";
function App() {
  const[ordens, setordem] = useState<User[]>([]);
  function adicionarPedido(os:User){
    setordem([...ordens, os]);
  }
  return (
    <div className="min-h-screen font-[Manrope] bg-slate-100">
    <Header/>
    <FormOS cadastrar={adicionarPedido}/>
    <CardOS/>
    </div>
  );
}

export default App;
