import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Service from "./pages/service"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Gallery from "./pages/gallery"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 return (
    <>
   
   <BrowserRouter>
    <Navbar/>
    
  <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/service' element={<Service/>} />
    <Route path='/contact' element={<Contact/>} />

    </Routes>

    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
