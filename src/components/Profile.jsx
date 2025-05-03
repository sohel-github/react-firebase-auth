import React,{useState} from 'react'
import Header from './Header'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, updateAuthProfile } from '../firebase'
import Spinner from './Spinner'

const Profile = () => {

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [loading, setLoading] = useState(false)

    const [user] = useAuthState(auth)

    const handleUpdateData = async (e) => {
        e.preventDefault()
        setName('')
        setPhoto('')

        try {
            setLoading(true)
            await updateAuthProfile(name, photo)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }


    return (
        <>
            <Header />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-100 rounded-lg max-w-4xl mx-auto mt-5">
                <div className="bg-white p-6 rounded shadow">
                    <div className="max-w-md mx-auto p-3 bg-white rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Update user data</h2>

                        {loading && <Spinner />}

                        <form method='post' onSubmit={handleUpdateData}>
                            <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                            />
                            </div>

                            <div className="mb-4">
                            <label htmlFor="photo" className="block text-gray-700 font-medium mb-1">Photo URL</label>
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                                value={photo}
                                onChange={(e)=>setPhoto(e.target.value)}
                                required
                            />
                            </div>

                            <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
                            >
                            Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">User Data</h2>
                    <div>
                        {user.photoURL !== null ? <img src={user.photoURL} alt={user.displayName} className='rounded-full w-10 h-10' /> : <img src={PersonImg} alt={user.displayName} className='rounded-full w-10 h-10' />}
                    </div>
                    <p className="text-gray-600">Name: <b>{user.displayName}</b></p>
                    <p className="text-gray-600">Email: <b>{user.email}</b></p>
                </div>
            </div>

        </>
    )
}

export default Profile