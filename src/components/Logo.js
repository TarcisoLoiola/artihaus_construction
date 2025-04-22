import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/LOGOARTIHAUS.svg'

const Logo = () => {

    return (
        <Link to='/' className="logo_artihaus">
            <img src={logo} alt="Company Logo" />
        </Link>
    );
};
export default Logo;