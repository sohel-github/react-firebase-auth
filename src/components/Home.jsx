import React from 'react'

import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

import Header from './Header'
import Spinner from './Spinner'

const Home = () => {

  const [user, loading] = useAuthState(auth)
  // console.log(user)

  if(loading) return <Spinner />

  return (
    <>
      <Header />
      <div className='lg:container mx-auto px-4'>
        <p>Welcome to guestbook, {user.email}</p>
      </div>
    </>
  )
}

export default Home