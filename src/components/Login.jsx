import React,{useState} from 'react'
import { loginUser, loginWithFacebook, loginWithGithub, loginWithGoogle } from '../firebase'
import Spinner from './Spinner'
import { useNavigate, NavLink } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(""); 

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("");

    try {
      setLoading(true)
      const user = await loginUser(email, password)
      console.log(user);
      navigate('/home')
    } catch (error) {
      console.error("Login error:", error.code);
      switch (error.code) {
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Try again later.");
          break;
        default:
          setError("Login failed. Please try again.");
      }
    }finally{
      setLoading(false)
      setEmail('')
      setPassword('')
    }
  }

  const handleGoogleAuth = async () => {
    await loginWithGoogle()
    navigate('/home')
  }
  
  const handleFacebookAuth = async () => {
    await loginWithFacebook()
    console.log('facebook')
    navigate('/home')
  }

  const handleGithubAuth = async () => {
    await loginWithGithub()
    console.log('github')
    navigate('/home')
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>

        {loading && <Spinner />}
        {error && <p className='text-red-700'>{error}</p>}

        <form action="#" method="POST" className="mb-2 space-y-5" onSubmit={handleLogin}>
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

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <NavLink to="/reset" className="text-sm text-blue-600 hover:underline">Forgot password?</NavLink>
          </div>

          <button type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Log In
          </button>

        </form>

        <button onClick={handleGoogleAuth} className="mb-2 flex w-full items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 bg-red-900 text-white hover:bg-red-800 transition">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="w-5 h-5" />
          <span>Sign in with Google</span>
        </button>

        <button onClick={handleFacebookAuth} className="mb-2 flex w-full items-center justify-center space-x-2 bg-[#377fe5] hover:bg-[#165cdb] text-white px-4 py-2 rounded-lg transition">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.497v-9.294H9.691v-3.622h3.131V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
          </svg>
          <span>Continue with Facebook</span>
        </button>

        <button onClick={handleGithubAuth} className="mb-2 flex w-full items-center justify-center space-x-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg transition">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.84 10.94.57.1.78-.25.78-.55v-2.02c-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.28 1.18-3.08-.12-.3-.51-1.5.11-3.13 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0C17.04 4.9 18 5.22 18 5.22c.62 1.63.23 2.83.12 3.13.74.8 1.18 1.83 1.18 3.08 0 4.39-2.7 5.36-5.27 5.64.42.36.78 1.09.78 2.2v3.27c0 .3.2.66.8.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
          <span>Sign in with GitHub</span>
        </button>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?
          <NavLink to="/register" className="text-blue-600 hover:underline"> Register</NavLink>
        </p>
      </div>
    </div>
  )
}

export default Login