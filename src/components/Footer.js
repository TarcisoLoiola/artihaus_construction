import React from 'react'
import Link from './Link';
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='footer u-backg-c-darkgray'>
            {/* this first block stay on top of block 2 and a border-bottom separates them */}
            <div className='page-content-container u-bt-border-lite'>
                {/* //this first row is flex. h1 and button take one space each */}
                <div className='u-flex-row u-gap-lg space-between'>
                    <h1 className='u-color-white'>Let’s talk about your project</h1>
                    <Link to='/contact' text='Contact with us' className='u-btn-md' color='white' backgroundColor='gold' icon='arrow' />
                </div>
            </div>
            <div className='page-content-container '>
                {/* this second row is flex */}
                <div className='u-flex-row u-gap-lg space-between u-bt-border-lite u-padding-bottom-lg'>
                    {/* this is a block or flex column img on top of the p */}
                    <div className='u-flex-column flex-2'>
                        <Logo logo='secondaryLogo' className='u-mr-bt-xs' />
                        <p className='u-p u-color-white'>Serving Georgia from Augusta to Chattanooga and everywhere in between.</p>
                    </div>
                    {/* this is a block or flex column */}
                    <div className='u-flex-column u-color-white flex-1'>
                        <h4 className='u-h4 u-color-gold u-mr-bt-xs'>Quick Links</h4>
                        <Link to='/' text='Home' showActive={false} button={false} className='u-mr-bt-xs quick-link' />
                        <Link to='/About' text='About' showActive={false} button={false} className='u-mr-bt-xs quick-link' />
                        <Link to='/Services' text='Services' showActive={false} button={false} className='u-mr-bt-xs quick-link' />
                        <Link to='/Gallery' text='Gallery' showActive={false} button={false} className='u-mr-bt-xs quick-link' />
                        <Link to='/Contact' text='Contact' showActive={false} button={false} className='u-mr-bt-xs quick-link' />
                    </div>
                    {/* this is a block or flex column */}
                    <div className='u-flex-column flex-2'>
                        <h4 className='u-h4 u-color-gold u-mr-bt-xs'>Business Hours</h4>
                        <p className='u-p u-color-white u-mr-bt-xs'>Monday - Friday: 8:00AM - 5:30PM</p>
                        <p className='u-p u-color-white u-mr-bt-xs'>Saturday: 8:00AM - 12:00PM</p>
                        <p className='u-p u-color-white u-mr-bt-xs'>Sunday: Closed</p>
                        {/* this is a block or flex column */}
                    </div>
                    <div className='u-flex-column'>
                        <h4 className='u-h4 u-color-gold u-mr-bt-xs'>Contact Us</h4>
                        <p className='u-p u-color-white u-mr-bt-xs'>artihausconstruction@gmail.com</p>
                        <p className='u-p u-color-white u-mr-bt-xs'>+1(678) 260-5968</p>
                        <p className='u-p u-color-white u-mr-bt-xs'>4153 Brentwood Dr,<br />Buford GA 30518, United States</p>
                        <div className='u-flex-row u-gap-lg'>
                            <Link to='https://www.facebook.com/artihausconstruction' color='white' external icon='facebook' alt='facebook icon' />
                            <Link to='https://www.instagram.com/artihaus_construction' color='white' external icon='instagram' alt='instagram icon' />
                        </div>
                    </div>
                </div>
                <p className="u-p u-color-white u-mr-tp-md text-center">© {new Date().getFullYear()} Artihaus Construction. UX/UI by Neves Design. Developed by Artihaus Construction. All rights reserved.</p>
            </div>
        </footer>
    )
};
export default Footer