import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ to, text }) => {
    const location = useLocation()
    console.log( location )
    const [ clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <li>
            <NavLink
                to={to}
                onClick={handleClick}
                className={({ isActive }) => (
                    isActive && clicked ? 'navLinkActive' : 'navLink'
                )}>
                {text}
            </NavLink>
        </li>
    )
}; export default Link