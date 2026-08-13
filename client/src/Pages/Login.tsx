import { useState} from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import type { FormEvent } from 'react'

export function Login() {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [erro, setErro]= useState<string | null>(null)
  const [loading, setIsLoading] = useState(false)

  const { login } = useAuth()
  const navigate  = useNavigate()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErro(null)
    setIsLoading(true)

    try {
      await login(email, password)
      navigate('/')
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : 'Erro para logar')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1 className="mx-15 text-4xl font-bold items-center">iRepair - Login</h1>
      <form onSubmit={handleSubmit} className=" grid grid-rows justify-center items-center bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-100">
        <input type="email"    value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="border border-gray-300 rounded-lg placeholder:text-gray-400 w-70"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required className="border border-gray-300 rounded-lg placeholder:text-gray-400 w-70" />
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <button type="submit" disabled={loading} className="translate-x-6 border border-gray-300 rounded-lg w-60 h-15 bg-sky-600 text-white text-3xl">
          {loading? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}