import React from "react";
import Logo from './Logo'
import Link from "./Link";

const NavBar = () => {
    return (
        <nav className="navBar u-bg-gold">
            <div className="navBar-container">
                <Logo logo='primaryLogo' />
                <div className="navMenu u-color-gray">
                    <Link to='/' text="Home" button={false}/>
                    <Link to='/about' text="About"  button={false}/>
                    <Link to='/gallery' text="Gallery"  button={false}/>
                    <Link to='/contact' text="Contact"  button={false}/>
                    <Link to='https://www.facebook.com/artihausconstruction' color='gray' external icon='facebook' alt='facebook icon' />
                    <Link to='https://www.instagram.com/artihaus_construction' color='gray' external icon='instagram' alt='instagram icon' />
                </div>
            </div>
        </nav>
    );
};
export default NavBar;