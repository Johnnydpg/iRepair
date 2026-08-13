import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard';
import Clients from './Pages/Clients';
import ServicesOrders from './Pages/ServicesOrders';
import MainLayout from './layout/MainLayout';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Login } from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRoute />}>
          <Route element = {<MainLayout/>}>
            <Route path='/' element = {<Dashboard/>}/>
            <Route path='/Clients' element = {<Clients/>}/>
            <Route path='/ServicesOrders' element = {<ServicesOrders/>}/>
            </Route>
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );  
}

export default App;
