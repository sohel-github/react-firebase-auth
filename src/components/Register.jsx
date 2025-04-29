import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register to Your Account</h2>

        <form action="#" method="POST" className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>

          <button type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          All Ready have an account?
          <a href="#" className="text-blue-600 hover:underline"> Login</a>
        </p>
      </div>
    </div>
  )
}

export default Register