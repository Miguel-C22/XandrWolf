import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar bg-gray-200 fixed">
        <div className="navbar-start">
            <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2 shadow text-xl bg-gray-200">
                <li><a href='#about'>About</a></li>
                <li><a href='#albums'>Albums</a></li>
                <li><a href='#singles'>Singles</a></li>
                <li><a href='#remixes'>Remixes</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            </div>
        <img src="/images/WolfLogo.png" alt="" className=' hidden lg:block'/>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
                <li><a href='#about'>About</a></li>
                <li><a href='#albums'>Albums</a></li>
                <li><a href='#singles'>Singles</a></li>
                <li><a href='#remixes'>Remixes</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link to="/login"><img className=' h-14 sm:h-full' src="/images/WolfLogo.png" alt=""/></Link>
        </div>
    </div>
  )
}

export default Header