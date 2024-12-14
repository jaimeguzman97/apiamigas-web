import React, { useRef, useState } from 'react'
import { ImWhatsapp } from 'react-icons/im';
import { FiAlertCircle } from 'react-icons/fi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Map } from '../components/Map';
import { sendForm } from '@emailjs/browser';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import emailjs from '@emailjs/browser';


export const ContactPage = () => {


    const form = useRef();

    const [submitForm, setSubmitForm] = useState(false);


    const sendEmail = (object) => {

        emailjs.send('service_lztbgtg', 'template_0or1gko', object, 'rN5UHYiFjxP3FK9os')
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }


    return (

        <section className="mt-16 w-full dark:bg-pearl-950">


            <div className="md:grid grid-cols-2 container mx-auto">


                <div className="flex justify-center text-slate-700 bg-slate-50 rounded-lg dark:bg-yellow-400 h-[580px]">

                    <div className="flex flex-col items-start justify-center gap-10">

                        <h1 className="text-2xl w-full text-center md:text-start font-semibold mb-4">Contacto</h1>

                        <h4 className="text-md">Contáctanos por los siguientes medios</h4>
                        <span className="flex justify-center items-center gap-3 text-2xl">
                            <FaWhatsapp className="text-amber-600 dark:text-pearl-950" size={30} />
                            +569 27429042
                        </span>

                        <span className="flex justify-center items-center gap-3 text-2xl">
                            <MdOutlineMail className="text-amber-600 dark:text-pearl-950" size={30} />
                            erika@apiamigas.cl
                        </span>

                        <span className="flex justify-center items-center gap-3 text-2xl">
                            <MdOutlineMail className="text-amber-600 dark:text-pearl-950" size={30} />
                            pilar@apiamigas.cl
                        </span>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-start items-center gap-3">
                                <GoCreditCard className="text-amber-600 dark:text-pearl-950" size={30} />
                                <h3 className="text-2xl">Datos bancarios</h3>
                            </div>
                            <span className='text-md'>
                                Sociedad Comercial Apiamigas Spa
                                <br />
                                77.802.096-3
                                <br />
                                Cuenta vista Banco Estado 37870515384
                            </span>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center items-center bg-white-200">

                    <Formik
                        initialValues={{

                            nombre: "",
                            correo: "",
                            mensaje: ""
                        }}
                        validate={(valores) => {

                            let errores = {};

                            //validacion nombres
                            if (!valores.nombre) {
                                errores.nombre = "Por favor ingrese un nombre"
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {

                                errores.nombre = "El nombre solo puede contener letras y espacios";
                            }

                            //validacion correo
                            if (!valores.correo) {
                                errores.correo = "Por favor ingrese un correo electronico"
                            } else if (! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {

                                errores.correo = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
                            }

                            if (!valores.mensaje) {
                                errores.mensaje = "Por favor ingrese un mensaje"
                            }

                            return errores;
                        }}
                        onSubmit={(valores, { resetForm }) => {

                            resetForm();
                            setSubmitForm(true);

                            setTimeout(() => { sendEmail(valores), setSubmitForm(false) }, 5000);

                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur }) => (

                            <Form ref={form} className="w-full text-slate-700 p-6 on">

                                <div className="flex justify-center mb-10">
                                    <h4 className="text-amber-600 dark:text-yellow-400 text-2xl font-semibold animate-bounce animate-infinite">Envíanos un mensaje 🐝!</h4>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-yellow-400">Nombre</label>
                                    <Field
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    <ErrorMessage name="nombre" component={() => (
                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500 font-semibold">{errors.nombre}</div>
                                    )} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700 dark:text-yellow-400">Email</label>
                                    <Field
                                        type="email"
                                        id="correo"
                                        name="correo"
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    <ErrorMessage name="correo" component={() => (
                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500 font-semibold">{errors.correo}</div>
                                    )} />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-yellow-400">Mensaje</label>
                                    <Field
                                        id="mensaje"
                                        name="mensaje"
                                        as="textarea"
                                        rows="4"
                                        className="mt-1 p-2 w-full border rounded-md resize-none"
                                    >
                                    </Field>
                                    <ErrorMessage name="mensaje" component={() => (
                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500 font-semibold">{errors.mensaje}</div>
                                    )} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="px-20 py-2 font-semibold bg-amber-500 hover:bg-amber-400  hover:shadow-lg hover:shadow-amber-500 text-white dark:text-gray-600 rounded dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:hover:shadow-amber-100 dark:hover:text-white  focus:outline-none focus:ring-2 focus:ring-blue-300">Enviar</button>
                                </div>


                                <div className="flex items-center justify-center p-6">
                                    {submitForm && <p className='flex items-center gap-2 text-green-700 dark:text-green-500 font-bold'><span><FiAlertCircle size={20} /></span>El mensaje fue enviado correctamente !</p>}
                                </div>

                            </Form>
                        )}
                    </Formik>


                </div>

            </div>

            <Map />

        </section>

    )
}
