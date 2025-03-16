import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ to, text }) => {
    const location = useLocation();
    return (
        <NavLink
            to={to}
            style={({ isActive }) => (
                isActive && location.pathname !== '/' ? navLinkActive : navLink
            )}>
            {text}
        </NavLink>
        )
}; export default Link

const navLink = {
    margin: '0 15px',
    width: '115px',
    height: '40px',
    borderRadius: '8px',
    alignContent: 'center',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    color: '#3e2008',
    fontSize: '18px',
}

const navLinkActive = {
    ...navLink,
    transform: 'scale(1.1)',
    boxShadow: '0 12px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(62, 32, 8, 0.6)',
    color: '#fff',
    pointerEvents: 'none',
}

// <div className='hamburger' onClick={toggleMenu}>
//                 <div className={isOpen ? 'bar open' : 'bar'}></div>
//                 <div className={isOpen ? 'bar open' : 'bar'}></div>
//                 <div className={isOpen ? 'bar open' : 'bar'}></div>
//             </div>