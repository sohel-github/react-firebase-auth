import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  const handleSignout = async (e) => {
    e.preventDefault()

    await signOut(auth).then(()=> {
      navigate('/login')
      // console.log('User logout done')
    }).then((error)=>{
      console.log(error)
    })
  }

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">MyBrand</a>
          </div>

          <div className="flex items-center md:hidden" onClick={() => setShowMenu(!showMenu)}>
            <button id="mobile-menu-button" className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <a href="#" onClick={handleSignout} className="block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Logout</a>
          </div>
        </div>
      </div>

      {showMenu && (
        <div id="mobile-menu" className="px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="/profile" className="block text-gray-700 hover:text-blue-600">Profile</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          <a href="#" onClick={handleSignout} className="block bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Logout</a>
        </div>
      )}
    </nav>

  )
}

export default Header