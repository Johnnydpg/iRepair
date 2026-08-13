import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { api } from "../services/api";

interface User{
    id: number
    email: string
}
interface authContextType{
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: ()=> Promise<void>
}

const authContext = createContext<authContextType | null>(null);
export function AuthProvider({children}: {children : ReactNode}){
    const[user, setUser] = useState<User | null> (null);
    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    api.get('/auth/me')
      .then(res => setUser(res.data.usuario))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false))
  }, [])
  async function login(email: string, password: string) {
    const response = await api.post('/auth/login', { email, password })
    setUser(response.data.user);
  }
    async function logout() {
    await api.post('/auth/logout')
    setUser(null)
  }

  return (
    <authContext.Provider value={{
      user,
      isAuthenticated: user !== null,
      isLoading,
      login,
      logout,
    }}>
      {children}
    </authContext.Provider>
  )
}
export function useAuth() {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
