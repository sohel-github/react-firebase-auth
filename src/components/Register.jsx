import React, { useState } from 'react'
import { registerUser } from '../firebase'
import Spinner from './Spinner'
import { NavLink } from 'react-router-dom'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("");

    try {
      setLoading(true)
      await registerUser(email, password)
      setSuccess("Registration successful! Welcome guestbook")
    } catch (error) {
      // Handle the error from firebase.js
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already in use.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    }finally{
      setLoading(false)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register to Your Account</h2>

        {loading && <Spinner />}
        {error && <p className='text-red-700'>{error}</p>}
        {success && <p className='text-green-700'>{success}</p>}

        <form action="#" className="space-y-5" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>

          <button type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          All Ready have an account?
          <NavLink to="/login" className="text-blue-600 hover:underline"> Login</NavLink>
        </p>
      </div>
    </div>
  )
}

export default Register