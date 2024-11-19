import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { GalleryProvider } from './context/GalleryContext'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Gallery from './pages/GalleryPage'
import FullScreenImage from './pages/FullScreenImage'

import './style/index.css'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <GalleryProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:index" element={<FullScreenImage />} />
            {/*
        */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </GalleryProvider>
    </BrowserRouter>
  )
}
export default AppRouter