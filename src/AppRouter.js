import React, { useState } from 'react'
import { Route, Routes, useLocation, useMatch } from "react-router-dom"

import ScrollTop from './components/ScrollTop'
import NavBar from './components/NavBar'
// import Logo from './components/Logo'
import Footer from './components/Footer'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import FullScreenImage from './pages/FullScreenImage'
import Admin from './pages/Admin'
import PageNotFound from './pages/PageNotFound';



const AppRouter = () => {
  const location = useLocation();
  const isGalleryIndex = useMatch('/gallery/:index');
  return (
    <div>
      <ScrollTop />
      {!isGalleryIndex && <NavBar />}
      <main className='paddingTop-xl'>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:_id" element={<FullScreenImage />} />
          <Route path="/contact" element={<Contact />} />
          {/*
              <Route path='/admin' element={<Admin />} />
              */}
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </main>
      {!isGalleryIndex && <Footer />}
    </div>
  )
}
export default AppRouter

// <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/gallery/:index" element={<FullScreenImage />} />


// <Route
//     path="/dashboard"
//     element={
//         <PrivateRoute>
//             <Dashboard />
//         </PrivateRoute>
//     }
// />

// <Route
//     path="/login"
//     element={
//         <PublicRoute>
//             <Login />
//         </PublicRoute>
//     }
// />