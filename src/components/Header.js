// src/components/Navbar.js
import React from 'react';
import NavBar from './Navbar'
import Logo from './Logo'
import '../style/Header.css'

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <Logo />
                <NavBar />
            </header>
        );
    }
}

export default Header;
