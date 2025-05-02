import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Reset from './components/Reset'
import PrivateRoutes from './routes/PrivateRoutes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Home/>} exact />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reset' element={<Reset/>} />
      </Routes>
    </Router>
  )
}

export default App
