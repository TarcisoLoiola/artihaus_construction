import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext';
import Logo from './Logo'
import Link from "./Link";

const NavBar = () => {
    const { content } = useContext(ContentContext)
    let mediaPages = []
    if (content) {
        mediaPages = content.social_media.mediaPages
    }

    return (
        <nav className="navBar backgroundColor-white">
            <div className="navBar-container">
                <Logo logo='primaryLogo' />
                <div className="navMenu color-gray">
                    <Link to='/' text="Home" button={false} />
                    <Link to='/about' text="About" button={false} />
                    <Link to='/gallery' text="Gallery" button={false} />
                    <Link to='/contact' text="Contact" button={false} />
                    {
                        mediaPages && mediaPages.map(({ page, url, icon }, index) => {
                            return (
                                <Link key={index} to={url} icon={page} color='gray' external alt={`${page} icon url`} />
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    );
};
export default NavBar;