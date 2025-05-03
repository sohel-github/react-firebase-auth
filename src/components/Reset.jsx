import React,{useState} from 'react'
import Spinner from './Spinner';
import { resetPassword } from '../firebase';
import { NavLink } from 'react-router-dom';

const Reset = () => {

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  const handleReset = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      setLoading(true)
      await resetPassword(email)
      setSuccess('Password reset link sent to your email')

    } catch (error) {

      console.error("Reset error:", error.code);
      
      switch (error.code) {
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        case "auth/missing-email":
          setError("Please enter an email.");
          break;
        default:
          setError("Something went wrong. Try again later.");
      }
      
    }finally{
      setLoading(false)
      setEmail('')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Enter your email</h2>

        {loading && <Spinner />}
        {error && <p className='text-red-700'>{error}</p>}
        {success && <p className='text-green-700'>{success}</p>}

        <form action="#" method="POST" className="space-y-5" onSubmit={handleReset}>
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

          <button type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Send Email
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

export default Reset