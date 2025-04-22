import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const NLink = ({ to, text }) => {

    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? 'navLinkActive' : 'navLink' )}
            {text}
        </NavLink>
    )
}; export default NLink