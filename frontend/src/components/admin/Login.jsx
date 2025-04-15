import React, { useState } from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      setError(error.message)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="block mb-2 p-2 w-full border" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="block mb-2 p-2 w-full border" />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  )
}

export default Login
