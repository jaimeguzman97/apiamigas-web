import React from 'react'
import { Filters } from './Filters'
import { useFormAction, useLocation, useNavigate } from 'react-router-dom'
import { getProductsByName } from '../helpers/getProductsByName';
import queryString from 'query-string';
import { useForm } from '../hooks/useForm';
import { productos } from '../bd/item.json';
import { Products } from './Products';


export const HeaderProducts = ({ changeFilters }) => {


  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='flex flex-col md:flex-col lg:flex-row md:items-center justify-between p-5 md:p-5 dark:bg-pearl-950 items-center w-full'>

      {/* <form onSubmit={onSearchSubmit}>
      <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input name="searchText" type="text" value={searchText} onChange={onInputChange} autoComplete="off" className="block w-full p-3 md:p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
      </div>
    </form> */}

      <h1 className="text-xl mt-7 md:text-2xl p-4 text-gray-800 font-semibold dark:text-yellow-400 md:mb-0">Productos</h1>
      <Filters onChange={changeFilters} />
    </div>

  )
}
