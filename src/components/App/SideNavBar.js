import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// import { AppContext } from '../context/AppContext'
import Logo from '../components/Logo'
import "../style/SideNavbar.css"; // Assuming the CSS provided earlier is in this file



const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };
  return (
    <div className="side-navbar">
      <Logo />
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
        </div>
        <ul className={isOpen ? 'navbar-links open' : 'navbar-links'}>
          <li >
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
      {
        // selectedIcons.map((icon, index) => (
        //   <div className="nav-item" key={index} >
        //       <img src={ iconMap[icon.defaultURL]} alt={icon.label} className="icon" />
        //       <span className="tooltip">{icon.label}</span>
        //     </div>
        // ))
      }
    </div>
  );
};

export default SideNavBar;

// <div className="nav-item" key={index}
//             onMouseEnter={() => toggleIcon(index)}
//             onMouseLeave={() => toggleIcon(null)}
//             >
//               <img src={
//                 hovered && index === stateIndex ?
//                 iconMap[icon.hoveredURL]
//                 :
//                 iconMap[icon.defaultURL]
//               }
//               alt={icon.label} className="icon" />
//               <span className="tooltip">{icon.label}</span>
//             </div>