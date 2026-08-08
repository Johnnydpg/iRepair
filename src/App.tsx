import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Clients from './Pages/Clients';
import ServicesOrders from './Pages/ServicesOrders';
function App() {
  const[ordens, setordem] = useState<User[]>([]);
  function adicionarPedido(os:User){
    setordem([...ordens, os]);
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Dashboard/>}/>
          <Route path='/Clients' element = {<Clients/>}/>
          <Route path='/ServicesOrders' element = {<ServicesOrders/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
