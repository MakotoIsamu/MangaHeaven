import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { Backend_URI } from '../utils'

const AuthContext = createContext(false)

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const response = await fetch(`${Backend_URI}/auth/checkAuth`)
        const data = await response.json()
        setIsAuth(data)
      } catch (error) {
        console.error("Error checking authentication", error)
        setIsAuth(false) // Optionally handle failure to authenticate
      }
    }

    handleAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
