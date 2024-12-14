import React, { useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { productos } from '../bd/item.json';
import { Slider } from '../components/Slider';
import { GiDrippingHoney, GiHoneyJar } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs';
import { Map } from '../components/Map';
import '../styles/styles.css';



export const HomePage = () => {




  return (

    <main className='dark:bg-pearl-950'>

      <section>
        <div className="bg-cover h-[480px] md:h-[780px] w-full bg-center imgBanner">
          <div className="flex flex-col h-full backdrop-brightness-50 items-center animate-fade-right justify-center">
            <div className="flex flex-col md:text-2xl">
              <h1 className="text-white font-obviously font-semibold text-3xl md:text-6xl">Bienvenidos a</h1>
              <h3 className="font-extrabold text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-300 pb-3"> Apiamigas !</h3>
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-6">
              <h1 className="text-lg md:text-3xl  text-white">Conoce nuestros :</h1>
              <Link to="/productos" className="button gap-2">
                <span>Productos</span>
                <BsArrowRight size={20} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto  mt-10 md:mt-20">
        <div className="bg-pearl-50 dark:bg-pearl-950 text-slate-700 dark:text-meteor-400 flex flex-col flex-wrap gap-5 text-base md:text-xl px-5 md:px-20 py-10 md:py-20">
          <h2 className="tittle-nav font-semibold text-amber-600  text-center text-4xl dark:text-tiber-500 md:text-5xl lg:text-6xl">¿ Quienes somos ?</h2>
          <p className="md:text-lg lg:text-xl">
            Apiamigas, es una empresa Painina, que nace de la asociación de Pilar Azócar Tudela y Erika Torres Olivos, con 13 años dedicadas a la venta de insumos y maquinaria apícola en dos empresas del rubro.
          </p>
          <p className="md:text-lg lg:text-xl">
            Nuestra empresa busca satisfacer las necesidades de los apicultores a nivel nacional; ofreciendo una amplia variedad de insumos y maquinarias de alta calidad a precios competitivos y brindar una atención personalizada a cada cliente que nos visita o contacta a través de nuestras redes sociales y/o página web.
          </p>
          <p className="md:text-lg lg:text-xl">
            Queremos ser socias confiables para cada apicultor y ser reconocidas por nuestra calidad, compromiso y transparencia.
          </p>
        </div>

        <div className="bg-cover brightness-125 contrast-125 bg-center imgText h-auto md:h-[auto] md:w-auto md:order-first">
          <img
            src="/assets/letrero.jpg"
            alt="Letrero"
            className="object-cover w-full h-full md:hidden"
          />
        </div>
      </section>

      <section className="flex flex-col items-center text-slate-700 dark:text-white py-10 md:py-24">
        <div className="flex flex-col justify-center items-center p-14">
          <img className="w-48 h-auto" src="/assets/abeja.png" alt="abeja" />
          <h1 className='text-3xl md:text-5xl font-bold'>Horario de atención</h1>
          <p className='py-2 text-base md:text-2xl'>Lunes a viernes</p>
          <p className='text-base md:text-2xl'>de 8:00 a 17:00 horas</p>
          <p className='text-base md:text-lg text-amber-700 dark:text-yellow-500'>[ De 13:00 a 14:00 cerrado por colación ]</p>
        </div>

      </section>

      <Slider></Slider>

      <Map />
    </main>

  )
}
