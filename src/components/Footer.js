import React from 'react'
import Link from './Link';
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='footer u-backg-c-darkgray u-color-white'>
            {/* this first block stay on top of block 2 and a border-bottom separates them */}
            <div className='page-content-container u-bt-border-lite'>
                {/* //this first row is flex. h1 and button take one space each */}
                <div className='u-flex-row'>
                    <h1 >Let’s talk about your project</h1>
                    <Link to='/contact' text='Contact with us' className='u-btn-md' color='white' backgroundColor='gold' icon='arrow' />
                </div>
            </div>
            <div className='page-content-container'>
                {/* this second row is flex */}
                <div className='u-flex-row'>
                    {/* this is a block or flex column img on top of the p */}
                    <div className='u-flex-column'>
                        <Logo logo='secondaryLogo' className='u-mr-bt-xs' />
                        <p className='u-p u-color-white'>Serving Georgia from Augusta to Chattanooga and everywhere in between.</p>
                    </div>
                    {/* this is a block or flex column */}
                    <div className='u-flex-column'>
                        <h4 className='u-h4 u-color-gold u-mr-bt-xs'>Quick Links</h4>
                        <Link to='/' text='Home' showActive={false} button={false} className='u-mr-bt-xs'/>
                        <Link to='/About' text='About' showActive={false} button={false} className='u-mr-bt-xs'/>
                        <Link to='/Services' text='Services' showActive={false} button={false} className='u-mr-bt-xs'/>
                        <Link to='/Gallery' text='Gallery' showActive={false} button={false} className='u-mr-bt-xs'/>
                        <Link to='/Contact' text='Contact' showActive={false} button={false} className='u-mr-bt-xs'/>
                    </div>
                    {/* this is a block or flex column */}
                    <div className='u-flex-column'>
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
                        <p className='u-p u-color-white u-mr-bt-xs'>4153 Brentwood Dr,<br/>Buford GA 30518, United States</p>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer