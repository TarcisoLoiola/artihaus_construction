import React, { useState }from 'react'
import { Route, Routes, useLocation, useMatch } from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/App/Header'
import NavBar from './components/App/NavBar'
import Footer from './components/App/Footer'

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'
import Gallery from './pages/GalleryPage'
import FullScreenImage from './pages/FullScreenImage'

import Test from './pages/TestPage'
import YearTax from './pages/YearTax'

import './style/index.css'


const AppRouter = () => {
  const location = useLocation();
  const isGalleryIndex = useMatch('/gallery/:index');
  return (
    <div>
      <Header>
        { !isGalleryIndex && <NavBar /> }
      </Header>
      <main>
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={100} classNames="fade">
            <Routes location={location}>
              <Route path="/" element={<Home /> } />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:index" element={<FullScreenImage />} />
              <Route path='/test' element={<Test />} />
              <Route path='/tax' element={<YearTax />} />
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