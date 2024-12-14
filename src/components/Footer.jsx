import React from 'react'
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


export const Footer = () => {
    return (

        <footer className="bg-white dark:bg-pearl-950 w-full py-4 lg:py-8">
            <div className="mx-auto w-full  max-w-screen-xl px-4">
                <div className="md:flex md:justify-between">
                    <div className='text-3xl flex justify-center items-center mb-4 md:mb-0 md:mr-8'>
                        <img className="w-44 md:w-52" src="/assets/logo.png" alt="logo" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 items-center md:mr-8">
                        <div className="flex flex-col items-center text-sm text-center md:text-base">
                            <h2 className="mb-8 text-sm font-semibold text-gray-900 uppercase dark:text-yellow-300">Redes sociales</h2>

                            <ul className="flex">
                                <li className="w-12 h-12 flex items-center justify-center mx-2 cursor-pointer rounded-full border-2 border-amber-600 dark:border-yellow-400 transition-all duration-500 ease-in-out group hover:border-pink-500 dark:hover:border-pink-500">
                                    <a href="https://www.instagram.com/apiamigas_paine/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                        <FaInstagram className='text-amber-600 dark:text-yellow-400 transition-all duration-500 ease-in-out group-hover:text-pink-500' size={24} />
                                    </a>
                                </li>
                                <li className="w-12 h-12 flex items-center justify-center mx-2 cursor-pointer rounded-full border-2 border-amber-600 dark:border-yellow-400 transition-all duration-500 ease-in-out group hover:border-blue-500 dark:hover:border-blue-500">
                                    <a href="https://www.facebook.com/profile.php?id=61550040404164" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                        <FaFacebookF className='text-amber-600 dark:text-yellow-400 transition-all duration-500 ease-in-out group-hover:text-blue-500' size={24} />
                                    </a>
                                </li>
                                <li className="w-12 h-12 flex items-center justify-center mx-2 cursor-pointer rounded-full border-2 border-amber-600 dark:border-yellow-400 transition-all duration-500 ease-in-out group hover:border-green-500 dark:hover:border-green-500">
                                    <a href="https://wa.me/56927429042" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                                        <FaWhatsapp className='text-amber-600 dark:text-yellow-400 transition-all duration-500 ease-in-out group-hover:text-green-500' size={24} />
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="flex flex-col gap-7 mt-9 items-center text-sm md:text-lg">

                            <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-yellow-300">Contacto</h2>

                            <ul className="flex md:flex-col text-gray-500 gap-5 dark:text-gray-400">
                                <li className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-amber-600 dark:text-yellow-300" size={24} />
                                    <h4 className="hover:text-tiber-600 dark:hover:text-yellow-500">+569 27429042</h4>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MdOutlineMail className="text-amber-600 dark:text-yellow-300" size={30} />
                                    <h4 className="hover:text-tiber-600 dark:hover:text-yellow-500">Apiamigas@apiamigas.cl</h4>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-4 sm:mb-0">© 2023 <a href="https://www.facebook.com/profile.php?id=61550040404164" className="hover:underline">Api Amigas</a>. All Rights Reserved. 🌺🐝</span>
                </div>
            </div>
        </footer>


    )
}
