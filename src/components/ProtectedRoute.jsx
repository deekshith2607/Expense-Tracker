import React from 'react'

const ProtectedRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user')) 
  return (
   user ? children : <Navigate to='/Login' />
  )
}

export default ProtectedRoute
