import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Clients from './Pages/Clients';
import ServicesOrders from './Pages/ServicesOrders';
import MainLayout from './layout/MainLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element = {<MainLayout/>}>
            <Route path='/' element = {<Dashboard/>}/>
            <Route path='/Clients' element = {<Clients/>}/>
            <Route path='/ServicesOrders' element = {<ServicesOrders/>}/>
            </Route>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
