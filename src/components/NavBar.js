import React from "react";
import Logo from './Logo'
import Link from "./NavLink";
import SocialMediaLink from "./socialMediaLink";
import facebook from '../Assets/FACEBOOK.png'
import instagram from '../Assets/INSTAGRAM.png'

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
                    <SocialMediaLink to='https://www.facebook.com/artihausconstruction' icon={facebook} alt='facebook' />
                    <SocialMediaLink to='https://www.facebook.com/artihausconstruction' icon={instagram} alt='instagram' />
                </div>
            </div>
        </nav>
    );
};
export default NavBar;