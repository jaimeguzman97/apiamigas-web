import React from 'react'
import { BiMap } from 'react-icons/bi'

export const Map = () => {
    return (
        <section className="flex flex-col gap-5 md:gap-11 items-center text-center text-amber-600 dark:text-yellow-400 justify-center mt-28">
            <h1 className="py-3 text-slate-700 font-bold text-2xl md:text-5xl dark:text-yellow-400">Ubicacion</h1>
            <div className="flex items-center text-sm md:text-2xl text-slate-700 dark:text-white gap-3">
                <BiMap className="text-red-600" size={40} />
                <p> 10 Oriente 264 Paine Región Metropolitana - Chile</p>
            </div>

            <iframe className="w-full h-80 md:h-96 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d966.6977764937631!2d-70.74666047440546!3d-33.81791189546019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966323f6e922b4c1%3A0xc18614aedb72297d!2sApiamigas%20Paine!5e0!3m2!1ses-419!2scl!4v1698077004452!5m2!1ses-419!2scl"></iframe>
        </section>
    )
}
