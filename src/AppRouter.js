import React, { useState }from 'react'
import { Route, Routes, useLocation, useMatch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import Header from './components/Header'
import NavBar from './components/NavBar'
// import Logo from './components/Logo'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
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
    {/* NAVI BAR */}
      { !isGalleryIndex && <NavBar /> }
      <main>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={100}>
            <Routes location={location}>
              <Route path="/" element={<Home /> } />
              {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:index" element={<FullScreenImage />} />
              <Route path='/admin' element={<Admin />} /> */}
              <Route path='*' element={<PageNotFound />} />

            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      { !isGalleryIndex && <Footer /> }
    </div>
  )
}
export default AppRouter

// <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/gallery/:index" element={<FullScreenImage />} />