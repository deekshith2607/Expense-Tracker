import React, { useContext } from 'react'
import Signup from './pages/Signup'
import Login from "./pages/login";
import { Route, Routes } from 'react-router-dom'
import {AuthContext} from './Contexts/AuthProvider';


const App = () => {
  const {signup} = useContext(AuthContext)
  // signup()
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}

export default App
