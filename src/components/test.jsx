import React from 'react'
import { Navigate, Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (

    <header className='bg-black p-6 flex justify-between gap-12 items-center w-screen fixed z-10'>

      <div className='text-3xl font-extrabold'>
        <h1 className='ml-9 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-300 animate-jump-in'>API-Amigas</h1>
      </div>

      <nav className='font-bold flex gap-10 text-yellow-300'>

        <div className="max-w-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fillRule="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <Link className='item-center items-center justify-center flex hover:text-green-400' to="/">
            <span className="material-symbols-outlined">
              home
            </span>
            Home
          </Link>
          <Link className='item-center items-center justify-center flex' to="/about">
            <span className="material-symbols-outlined">
              emoji_nature
            </span>
            About
          </Link>
          <Link className="hover:text-pink-500" to="/login">
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </Link>

        </div>


      </nav>
    </header>
  )
}
