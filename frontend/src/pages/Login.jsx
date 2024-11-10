import React, { useContext, useState } from 'react';
import { BACKEND_URI } from '../utils';  // import BACKEND_URI from utils.js
import backgroundImage from '../assets/706281.jpg';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Both fields are required");
      return;
    }
    if(isAuth) {
      return navigate('/')
    }

    try {
      const response = await fetch(`${BACKEND_URI}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',  // Ensure credentials (cookies) are included in the request
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful");
        navigate('/');
        setIsAuth(true)
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <div className='h-screen w-full overflow-hidden relative' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right'
    }}>
      <form onSubmit={handleLogin} className='backdrop-blur-lg absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 bg-black/55 p-6 flex flex-col gap-3 text-white sm:w-96'>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          className='border border-white bg-transparent px-4 py-2 outline-none' 
          placeholder='Enter Email..'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          className='border border-white bg-transparent px-4 py-2 outline-none' 
          placeholder='Enter Password..'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='flex py-2 justify-between items-center gap-6'>
          <p className='text-red-700 cursor-pointer active:text-red-500'>Forget Password?</p>
          <Link to='/signup' className='text-green-700 cursor-pointer active:text-green-500'>Don't have an Account!</Link>
        </div>
        <button type='submit' className='bg-red-500 hover:bg-red-600 cursor-pointer py-2'>Login</button>
        {message && <p className="text-red-500 mt-2">{message}</p>} {/* Display message */}
      </form>
    </div>
  );
};

export default Login;
