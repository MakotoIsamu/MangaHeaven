import React, { useState } from 'react';
import backgroundImage from '../assets/706281.jpg';
import { Link } from 'react-router-dom';
import {BACKEND_URI} from '../utils'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); // for feedback message

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URI}auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup successful!");
        // Redirect or clear form
      } else {
        setMessage(data.message || "Signup failed");
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
      <div className='backdrop-blur-lg absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 bg-black/55 p-6 text-white sm:w-96'>
        <form onSubmit={handleSignup} className='flex flex-col gap-3'>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id='username' 
            className='border border-white bg-transparent px-4 py-2 outline-none' 
            placeholder='Enter Username..' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id='email' 
            className='border border-white bg-transparent px-4 py-2 outline-none' 
            placeholder='Enter Email..'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id='password' 
            className='border border-white bg-transparent px-4 py-2 outline-none' 
            placeholder='Enter Password..'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id='confirmPassword' 
            className='border border-white bg-transparent px-4 py-2 outline-none' 
            placeholder='Confirm Password..'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Link to='/login' className='text-green-700 cursor-pointer active:text-green-500'>Already have an Account!</Link>
          <button type='submit' className='bg-red-500 hover:bg-red-600 cursor-pointer py-2'>Signup</button>
          {message && <p className="text-red-500 mt-2">{message}</p>} {/* Show feedback message */}
        </form>
      </div>
    </div>
  )
}

export default Signup;
