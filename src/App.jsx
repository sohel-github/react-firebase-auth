import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Reset from './components/Reset'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reset' element={<Reset/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
