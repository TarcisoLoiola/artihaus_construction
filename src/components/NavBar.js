import React from "react";
import Logo from './Logo'
import Link from "./Link";

const NavBar = () => {
    return (
        <nav className="navBar-container">
            <div className="navBar">
                <Logo />
                <div className="navMenu">
                    <Link to='/' text="Home" />
                    <Link to='/about' text="About" />
                    <Link to='/gallery' text="Gallery" />
                    <Link to='/contact' text="Contact" />
                    <Link to='https://www.facebook.com/artihausconstruction' color='gray' external icon='facebook' alt='facebook icon' />
                    <Link to='https://www.instagram.com/artihaus_construction' color='gray' external icon='instagram' alt='instagram icon' />
                </div>
            </div>
        </nav>
    );
};
export default NavBar;