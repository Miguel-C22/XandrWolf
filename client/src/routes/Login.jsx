import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
  <div>
    <div className='absolute inset-0 flex flex-col justify-center items-center'>
      <img className=" w-auto max-h-[15vh] sm:max-h-[20vh] inline-block animate-slideLeft" src="/images/Xandr.png" alt="Xandr" />
      <img className=" w-auto max-h-[15vh] sm:max-h-[20vh] inline-block animate-slideRight ml-2" src="/images/Wolf.png" alt="Wolf" />
    </div>
    <div className="flex flex-col justify-center items-center sm:max-w-2xl max-w-sm m-auto gap-12 bg-customGreen py-32 sm:p-32 rounded-lg mt-32 text-white relative bg-opacity-95">
      <h1 className='text-2xl font-bold'>Admin Login</h1>
      <form action="" className="flex flex-col w-full px-4 gap-2">
        <input type="email" placeholder="Email" className="input input-bordered w-full"/>
        <input type="password" placeholder="Password" className="input input-bordered w-full"/>
        <button className="btn bg-blue-500 w-full text-white font-bold text-lg">Login</button>
      </form>
      <Link to="/"><img className='h-full' src="/images/WolfLogo.png" alt=""/></Link>
  </div>
  </div>
 
  )
}

export default Login