import React from 'react'
import backgroundImage from '../assets/706281.jpg'
import {Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-screen w-full overflow-hidden relative' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right'
    }}>
        <div className='backdrop-blur-lg absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 bg-black/55 p-6 text-white sm:w-96'>
            <form className='flex flex-col gap-3'>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' className='border border-white bg-transparent px-4 py-2 outline-none' placeholder='Enter Username..' />
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="" className='border border-white bg-transparent px-4 py-2 outline-none' placeholder='Enter Email..'/>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="" className='border border-white bg-transparent px-4 py-2 outline-none' placeholder='Enter Password..'/>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="" id="" className='border border-white bg-transparent px-4 py-2 outline-none' placeholder='Confirm Password..'/>
                <Link to='/login' className='text-green-700 cursor-pointer active:text-green-500'>Already have an Account!</Link>
                <button type='submit' className='bg-red-500 hover:bg-red-600 cursor-pointer py-2'>Signup</button>
            </form>
        </div>
    </div>
  )
}

export default Signup