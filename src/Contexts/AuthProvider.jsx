import React, { createContext } from 'react'

 export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  // const Users = [{ id: 1, email: 'user@example.com', password: 'password' }]
  // localStorage.setItem('users', JSON.stringify(Users))
  const user = {}



  const signup = (data) => {
    //Already exits
    const users = JSON.parse(localStorage.getItem('users')) || []
    const ifExits = users.find((user) => user.email === data.email)
    //users arry push data 
    
    console.log(users);
  }
  return (
    <AuthContext.Provider value={{signup}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
