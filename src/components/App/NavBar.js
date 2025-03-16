import React from "react";
import Logo from './Logo'
import Link from "./NavLink";

const NavBar = () => {
    return (
        <nav style={navMenu}>
            <Logo />
            <ul style={navLinks}>
                <Link to='/home' text="Home" />
                <Link to='/about' text="About" />
                <Link to='/gallery' text="Gallery" />
                <Link to='/contact' text="Contact" />
            </ul>
        </nav>
    );
};
export default NavBar;
const navMenu = {
    position: 'fixed',
    width: '100%',
    height: '90px',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(255 255 255 / 80%)',
    zIndex: 1000
}
const navBar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
}

const navLinks = {
    display: 'flex',
    listStyleType: 'none',
    padding: '10px',
}
