import React, { lazy, useEffect, useState } from 'react'
import { Paginations } from './Paginations';
import { useCategory } from '../context/CategoryContext';
import { useLocation } from 'react-router-dom';


export function Products({ products }) {

    const [productsPerPage, setProductsPerPage] = useState(24);
    const [currentPage, setCurrentPage] = useState(1);

    const { category } = useCategory();

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage


    const totalProducts = products.length;

    useEffect(() => {
        // Este efecto se ejecutará cada vez que la categoría cambie.
        setCurrentPage(1); // Restablece currentPage a 1 cuando cambia la categoría.

    }, [category, products]);

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "auto" });
    }, [currentPage]);

    const formatThousandSeparator = (number) => {

        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }


    return (

        <div className="flex flex-col justify-center items-center px-12 py-5">

            <Paginations
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}

            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
                {products.map(product => (

                    <div key={product.id} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        {/* Componente */}
                        <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-pearl-950 dark:border-gray-700">
                            <div className="items-center justify-center w-full bg-pearl-50 mt-1 dark:bg-pearl-950">
                                <img
                                    className="w-full h-72 p-8 mx-auto mb-4 sm:h-full md:w-auto md:h-auto lg:h-72 lg:w-auto rounded-t-lg animate-fade-down animate-once"
                                    src={product.img}
                                    alt={product.nombre}
                                />
                            </div>
                            <div className="px-5 pb-5 p-8">
                                <div>
                                    <p className="text-md tracking-tight sm:text-sm md:text-sm xl:text-lg text-gray-800 dark:text-meteor-400">
                                        {product.nombre.charAt(0).toUpperCase() + product.nombre.slice(1)}
                                    </p>
                                </div>
                                {product.talla && product.talla.length > 0 && (
                                    <div className="flex items-center flex-wrap py-2">
                                        <p className="text-slate-950 text-sm font-semibold dark:text-white">Talla :</p>
                                        <ul className="grid grid-cols-4 md:grid-cols-3 xl:grid-cols-6 ml-1 gap-1 text-xs text-white">

                                            {product.talla.map(talla => (
                                                <li key={talla} className='bg-amber-600 font-semibold p-1 flex w-6 text-center justify-center rounded-full text-xs dark:bg-tiber-700'>{talla}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="flex w-full justify-between">
                                    <span className="flex text-xl text-center font-bold md:text-lg text-slate-700 dark:text-white">
                                        $ {formatThousandSeparator(product.precio)}

                                    </span>
                                    <span>
                                        <h4 className="font-bold md:text-lg text-red-700 dark:text-red-500">{product.stock}</h4>
                                    </span>
                                    {/* <a
                                        href="#"
                                        className="text-white bg-meteor-700 hover:bg-meteor-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-tiber-700 dark:hover:bg-tiber-500 dark:focus:ring-blue-800"
                                    >
                                        Solicitar
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )).slice(firstIndex, lastIndex)}
            </div>

            <Paginations
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProducts={totalProducts}

            />
        </div>

    )
}
