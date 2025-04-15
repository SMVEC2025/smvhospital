import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) navigate('/')
      else setUser(user)
    }
    getUser()
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className="p-8">
      <h1 className="text-xl">Welcome to the Dashboard!</h1>
      {user && <p className="mt-2">Logged in as: {user.email}</p>}
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2">Logout</button>
    </div>
  )
}

export default Dashboard