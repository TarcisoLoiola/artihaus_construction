// src/components/Navbar.js
import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={isOpen ? 'bar open' : 'bar'}></div>
                <div className={isOpen ? 'bar open' : 'bar'}></div>
                <div className={isOpen ? 'bar open' : 'bar'}></div>
            </div>
            <ul className={isOpen ? 'navbar-links open' : 'navbar-links'}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'link')}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : 'link')}>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'link')}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
