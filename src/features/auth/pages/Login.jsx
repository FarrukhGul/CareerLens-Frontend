import React from 'react'
import { Link } from 'react-router';

const Login = () => {


    const handleSubmitForm = (e)=>{
        e.preventDefault();
    }

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">Login</h1>

            <form onSubmit={handleSubmitForm} className="space-y-5">

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Email</label>
                    <input type="text" id="email" name='email' placeholder='Enter email address' autoComplete="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"/>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-gray-400 uppercase tracking-widest">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' autoComplete="current-password"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"/>
                </div>

                <button className='button primary-button w-full bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 mt-2 shadow-lg shadow-violet-500/20 cursor-pointer'>
                    Login
                </button>
            </form>

             <p className='text-white mt-5 cursor-pointer'>Don't have an account? <Link className='text-violet-400' to={"/register"}>Register</Link></p>
        </div>
    </main>
  )
}

export default Login