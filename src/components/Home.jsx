import React from 'react'

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

import Header from './Header'
import Spinner from './Spinner'

import PersonImg from '../assets/person.png'

const Home = () => {

  const [user, loading] = useAuthState(auth)
  // console.log(user)

  if(loading) return <Spinner />

  return (
    <>
      <Header />
      <div className='container mx-auto p-4 bg-white rounded-lg shadow-md max-w-md flex gap-3 mt-5'>
        <div>
          {user.photoURL !== null ? <img src={user.photoURL} alt={user.displayName} className='rounded-full w-10 h-10' /> : <img src={PersonImg} alt={user.displayName} className='rounded-full w-10 h-10' />}
        </div>
        <div>
          <p>Welcome to guestbook, <b>{user.displayName}</b></p>
          <p>Email : <b>{user.email}</b></p>
        </div>
        
      </div>
    </>
  )
}

export default Home