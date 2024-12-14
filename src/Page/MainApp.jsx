import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import { UserProvider } from '../context/UserProvider';
import React from 'react';
import { HomePage } from './HomePage';
import { AboutePage } from './AboutePage';
import { LoginPage } from './LoginPage';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ContactPage } from './ContactPage';
import { ProductsPage } from './ProductsPage';
import ScrollTop from '../helpers/ScrollTop';

export const MainApp = () => {
  return (

    <UserProvider>

        <NavBar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutePage />} />
          <Route path='contacto' element={<ContactPage />} />
          <Route path='Productos' element={<ProductsPage />} />
          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </UserProvider>


  )
}
