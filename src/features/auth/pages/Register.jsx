import React from 'react'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {loading, handleLogin} = useAuth()

  const handleSubmitForm = async(e)=>{
        e.preventDefault();
       await handleLogin({username, email, password})
        navigate('/login')
     
    }

    if(loading){
        return (
            <main><h1>loading....</h1></main>
        )
    }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">Register</h1>

            <form onSubmit={handleSubmitForm} className="space-y-5">

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="username" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Username</label>
                    <input 
                    type="text" 
                    id="username"
                     name='username' 
                     placeholder='Enter Username'
                     value={username}
                     onChange={(e)=> setUsername(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"/>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Email</label>
                    <input 
                    type="text" 
                    id="email"
                     name='email' 
                     placeholder='Enter email address'
                     value={email}
                     onChange={(e)=> setEmail(e.target.email)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"/>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Enter your password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"/>
                </div>

                <button className='button primary-button w-full bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-2 shadow-lg shadow-violet-500/20 cursor-pointer'>
                    Register
                </button>
            </form>

            <p className='text-white mt-5 cursor-pointer'>Already have an account? <Link className='text-violet-400' to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register