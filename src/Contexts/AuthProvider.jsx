import React, { createContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

 export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  // const Users = [{ id: 1, email: 'user@example.com', password: 'password' }]
  // localStorage.setItem('users', JSON.stringify(Users))
  const [user, setuser] = useState({})



  const signup = (data) => {
    //Already exits
    const users = JSON.parse(localStorage.getItem('users')) || []
    const ifExits = users.find((user) => user.email === data.email)
    //users arry push data
    if(ifExits){
      alert('User already exists')
  
    } else{
      users.push(data)
      localStorage.setItem('users', JSON.stringify(users))
      alert('User created successfully . Please login to continue')
    }
    
    console.log(users);
  }
  const login = (data)=>{
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find((user) => user.email === data.email && user.password === data.password)
    if(user){
      localStorage.setItem('user', JSON.stringify(user))
      Navigate('/dashboard')
      
    } else{
      alert('Invalid email or password')
    }
  }
  return (
    <AuthContext.Provider value={{signup, login}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
