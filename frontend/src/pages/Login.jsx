import React from 'react'
import backgroundImage from '../assets/706281.jpg'
import {Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen w-full overflow-hidden relative' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right'
    }}>
        <form className='backdrop-blur-lg absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 bg-black/55 p-6 flex flex-col gap-3 text-white sm:96'>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" className='border border-white bg-transparent px-4 py-2 outline-none' placeholder='Enter Email..'/>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" className='border border-white bg-transparent px-4 py-2 outline-none' placeholder='Enter Password..'/>
            <div className='flex py-2 justify-between items-center gap-6'><p className='text-red-700 cursor-pointer active:text-red-500'>Forget Passwrd?</p><Link to='/signup' className='text-green-700 cursor-pointer active:text-green-500'>Don't have an Account!</Link></div>
            <button type='submit' className='bg-red-500 hover:bg-red-600 cursor-pointer py-2'>Login</button>
        </form>
    </div>
  )
}

export default Login