import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export function PrivateRoute() {
  const { isAuthenticated, isLoading } = useAuth()
if (isLoading) {
    return <div className="flex items-center justify-center text-4xl bg-sky-600 w-70 h-20 rounded-md border border-gray-400 shadow-lg text-white">Carregando...</div> 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}