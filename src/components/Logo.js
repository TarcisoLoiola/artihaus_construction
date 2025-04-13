import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/LOGOARTIHAUS.svg'

const Logo = () => {
    const [hovered, setHovered] = useState(false);
    const [index, setIndex] = useState(null)

    return (
        <Link to='/component' className="logo_artihaus">
            <img src={logo} alt="Company Logo" />
        </Link>
    );
};
export default Logo;