import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const Link = ({ to, text }) => {
    const location = useLocation()
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <NavLink
            to={to}
            onClick={handleClick}
            className={({ isActive }) => (
                isActive ? 'navLinkActive' : 'navLink'
            )}>
            {text}
        </NavLink>
    )
}; export default Link