import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Clients from './Pages/Clients';
import ServicesOrders from './Pages/ServicesOrders';
function App() {
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
