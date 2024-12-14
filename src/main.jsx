import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './Page/HomePage.jsx'
import { MainApp } from './Page/MainApp.jsx'
import './styles/styles.css'
import { CategoryProvider } from './context/CategoryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <CategoryProvider>
      <MainApp />
    </CategoryProvider>
  </BrowserRouter>

)
