import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { productos } from '../bd/item.json';
import { Products } from '../components/Products.jsx'
import { useCategory } from '../context/CategoryContext.jsx';
import {AiOutlineSearch} from 'react-icons/ai';


export const Filters = ({ onChange }) => {

    //const [minPrice, setMinPrice] = useState(0);
    const [search, setSearch] = useState("");
    const { category, setCategory } = useCategory();


    // const handleChangeMinPrice = (event) => {

    //     setMinPrice(event.target.value);

    //     onChange(prevState => ({
    //         ...prevState,
    //         minPrice: event.target.value
    //     }))

    // }

    const handleChangeCategory = (event) => {

        const newCategoria = event.target.value;
        setCategory(newCategoria);
        onChange((prevState) => ({
            ...prevState,
            categoria: newCategoria,
        }));

    }

    //probar
    const onSearchChange = (event) => {

        setSearch(event.target.value)

        onChange(prevState => ({

            ...prevState,
            nombre: event.target.value

        }))
    }


    return (
        <section className='flex flex-col md:flex-row justify-center gap-3 items-center'>

            <form className="mb-3 md:mb-0 w-80">
                <span className='text-xs text-amber-500 dark:text-yellow-400'>Buscar</span>
                <div className="relative">
                    <input type="text" value={search} onChange={onSearchChange} autoComplete="off" className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg 
                    bg-gray-50 focus:ring-amber-600 focus:amber-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" 
                    placeholder="Buscar producto..."/>
                </div>
            </form>

            <div className="w-full md:w-80 mb-3 md:mb-0">
                <span className="text-xs text-amber-500 dark:text-yellow-400">Categoria</span>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-700 focus:border-amber-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" id='catagoria' onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="articulosDeLaboratorio">Articulos de laboratorio</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="control de plagas">Control de plagas</option>
                    <option value="envases">Envases</option>
                    <option value="etiquetas">Etiquetas</option>
                    <option value="vestuario">Vestuario</option>
                    <option value="herramientas e insumos">Herramientas e insumos</option>
                    <option value="implementosReinas">Crianza de reinas</option>
                    <option value="maquinarias">Maquinarias</option>
                    <option value="tratamientos sanitarios">Tratamientos sanitarios</option>
                    <option value="suplementos nutricionales">Suplementos nutricionales</option>
                    <option value="souvenir">Souvenires</option>
                    <option value="maquinarias">Maquinarias</option>
                </select>
            </div>

            {/* <div className='flex flex-col items-center'>
                <label className='p-3' htmlFor="price">Precio a partir de :</label>
                <input
                    className="w-full max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-pink-500"
                    type="range"
                    id="price"
                    min='10000'
                    max='100000'
                    onChange={handleChangeMinPrice}
                />
                <span className='p-1 font-bold text-violet-700'>$ {minPrice}</span>
            </div> */}

        </section>

    )
}
