import React, { useEffect, useState } from 'react'
import { Navigate, Link, NavLink, HashRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const NavBar = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Al cargar la página, establece el tema según lo que esté almacenado en localStorage o la preferencia del sistema
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]); // Dependencia [theme] para que se actualice cuando cambia el tema

  const handleThemeSwitch = () => {
    // Cambia entre 'dark' y 'light' y actualiza el estado y localStorage
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (

    <header>

      <nav className='fixed top-0 left-0 flex gap-10 z-10 bg-white w-full dark:bg-black'>

        <div className='flex flex-wrap justify-start items-center md:ml-5 w-full py-4'>

          {/* <h1 className='tittle-nav ml-11 py-3 pl-3 font-extrabold text-5xl bg-clip-text text text-transparent bg-gradient-to-r from-yellow-400 to-green-300 animate-jump-in'>Api-Amigas</h1> */}
          <h1 className='tittle-nav w-full ml-3 pl-3 font-extrabold text-2xl text-amber-600 dark:text-yellow-500 animate-fade-up sm:text-2xl md:text-3xl xl:text-4xl'>Api-Amigas</h1>
        </div> 

        <div className="container flex justify-end items-center text-gray-700 dark:text-yellow-300">

          <div className="block md:flex items-center mr-10">
            <button onClick={handleThemeSwitch} className="py-2 px-2 rounded-md bg-slate-100 dark:bg-gray-900">
              {theme === "dark" ? <BsFillSunFill size={20} /> : <BsFillMoonStarsFill size={20} className="text-violet-600" />}
            </button>
          </div>

          <div className="hidden md:flex items-cente justify-between pr-10 text-base font-semibold cursor-pointer">

            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-slate-50 hover:text-amber-600 dark:hover:bg-gray-900 dark:hover:text-yellow-200 rounded-lg' to="/">
              <FaHome size={20} />
              Inicio
            </Link>

            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-slate-50 hover:text-amber-600 dark:hover:bg-gray-900 dark:hover:text-yellow-200 rounded-lg' to="/productos">
              Productos
            </Link>

            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-slate-50 hover:text-amber-600 dark:hover:bg-gray-900 dark:hover:text-yellow-200 rounded-lg' to="/contacto">

              Contacto
            </Link>

          </div>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-900 group">
            <div className="w-5 h-1 bg-amber-600 dark:bg-yellow-300 mb-1"></div>
            <div className="w-5 h-1 bg-amber-600 dark:bg-yellow-300 mb-1"></div>
            <div className="w-5 h-1 bg-amber-600 dark:bg-yellow-300 mb-1"></div>

            <div className="absolute top-0 -right-full opacity-0 h-screen w-8/12 font-semibold border-yellow-700 bg-slate-200 transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300 dark:bg-black border dark:border-yellow-300">

              <div className="flex flex-col items-center w-full text-base cursor-pointer pt-10">

                <Link className="hover:bg-slate-300 dark:hover:bg-gray-900 py-4 px-6 w-full flex justify-center items-center gap-2" to="/">
                  Inicio
                </Link>

                <Link className="hover:bg-slate-300 dark:hover:bg-gray-900 py-4 px-6 w-full flex justify-center items-center gap-2" to="/productos">
                  Productos
                </Link>

                <Link className="hover:bg-slate-300 dark:hover:bg-gray-900 py-4 px-6 w-full flex justify-center items-center gap-2" to="/contacto">
                  Contacto
                </Link>

              </div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  )
}
