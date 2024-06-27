import React from 'react'

function Header() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl">
            <li><a>About</a></li>
            <li><a>Albums</a></li>
            <li><a>Singles</a></li>
            <li><a>Albums</a></li>
            <li><a>Contact</a></li>
        </ul>
        </div>
       <img src="/images/WolfLogo.png" alt="" className=' hidden lg:block'/>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
            <li><a>About</a></li>
            <li><a>Albums</a></li>
            <li><a>Singles</a></li>
            <li><a>Albums</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
    <div className="navbar-end">
        <button><img className=' h-14 sm:h-full' src="/images/WolfLogo.png" alt=""/></button> {/* Hidden Login Button */}
    </div>
    </div>
  )
}

export default Header