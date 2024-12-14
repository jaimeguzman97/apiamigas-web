import React, { Suspense, lazy, useState } from 'react';
import { HeaderProducts } from '../components/HeaderProducts';
import { productos } from '../bd/item.json';
import { Products } from '../components/Products';

export const ProductsPage = () => {

    const [filters, setFilters] = useState({

        categoria: 'all',
        nombre: '',
        minPrice: 0,
    })

    // Esta función filtra los productos
    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.precio >= filters.minPrice &&
                (filters.categoria === 'all' || product.categoria === filters.categoria) &&
                (filters.nombre === '' || product.nombre.toLowerCase().includes(filters.nombre.toLowerCase()))
            )
        });
    }

    const filteredProducts = filterProducts(productos);


    return (

        <main className='dark:bg-pearl-950 mt-16 h-full min-h-screen'>
            <HeaderProducts changeFilters={setFilters} />

            <Products products={filteredProducts} />



            {/* <div className="p-10">
                <button className="bg-violet-200 p-5 rounded-full items-center justify-center">
                    <span className="flex material-symbols-rounded text-violet-500">
                        shopping_cart
                    </span>
                </button>
            </div> */}
        </main>
    )
}
