import React, { useContext } from 'react'
import Signup from './pages/Signup'
import Login from "./pages/login";
import { Route, Routes } from 'react-router-dom'
import {AuthContext} from './Contexts/AuthProvider';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  const {signup} = useContext(AuthContext)
  // signup()
  // const Users = [{ id: 1, email: 'user@example.com', password: 'password' ,AllExpences: []}]
  // localStorage.setItem('users', JSON.stringify(Users))
  return (
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
