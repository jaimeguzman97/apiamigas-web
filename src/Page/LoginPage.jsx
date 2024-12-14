import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {

  const { user } = useContext(UserContext);

  return (

    <div className="flex justify-center items-center border-2 border-rose-500 h-screen">
      <div className="text-center border-pink-100">
        <h2 className="text-4xl">Inicio de sesion</h2>
        <form className="flex flex-col gap-6 mt-10 items-center text-end">

          <input className="border border-slate-500 w-60 h-9 rounded-md" placeholder=' User' type="text" />
          <input className="border border-slate-500 w-60 h-9 rounded-md" placeholder=' Password' type="password" />
          <a className="text-start text-gray-400 underline decoration-pink-300 hover:decoration-blue-400 mr-28" href="">Lost Password ?</a>
          <button className='bg-black text-red-100 rounded-md h-10 w-40'>Login</button>
        </form>
      </div>
    </div>
  )
}
