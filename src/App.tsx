import "./index.css";
import Header from "./components/Header";
import FormOS from "./components/FormOS";
import CardOS from "./components/CardOS";
function App() {
  return (
    <div className="min-h-screen font-[Manrope] bg-slate-100">
    <Header/>
    <FormOS/>
    <CardOS/>
    </div>
  );
}

export default App;
