import React from 'react'
import Link from './Link';
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='footer backgroundColor-darkgray'>
            {/* this first block stay on top of block 2 and a border-bottom separates them */}
            <div className='page-content-container borderBottom-lightgray'>
                {/* //this first row is flex. h1 and button take one space each */}
                <div className='flex-row gap-lg space-between'>
                    <h1 className='color-white'>Let’s talk about your project</h1>
                    <Link to='/contact' text='Contact with us' className='button-lg' color='white' backgroundColor='gold' icon='arrow' />
                </div>
            </div>
            <div className='page-content-container '>
                {/* this second row is flex */}
                <div className='flex-row gap-lg space-between borderBottom-lightgray paddingBottom-lg'>
                    {/* this is a block or flex column img on top of the p */}
                    <div className='flex-column flex-2'>
                        <Logo logo='secondaryLogo' className='marginBottom-xs' />
                        <p className='p color-white'>Serving Georgia from Augusta to Chattanooga and everywhere in between.</p>
                    </div>
                    {/* this is a block or flex column */}
                    <div className='flex-column color-white flex-1'>
                        <h4 className='h4 color-gold marginBottom-xs'>Quick Links</h4>
                        <Link to='/' text='Home' showActive={false} button={false} className='marginBottom-xs quick-link' />
                        <Link to='/About' text='About' showActive={false} button={false} className='marginBottom-xs quick-link' />
                        <Link to='/Services' text='Services' showActive={false} button={false} className='marginBottom-xs quick-link' />
                        <Link to='/Gallery' text='Gallery' showActive={false} button={false} className='marginBottom-xs quick-link' />
                        <Link to='/Contact' text='Contact' showActive={false} button={false} className='marginBottom-xs quick-link' />
                    </div>
                    {/* this is a block or flex column */}
                    <div className='flex-column flex-2'>
                        <h4 className='h4 color-gold marginBottom-xs'>Business Hours</h4>
                        <p className='p color-white marginBottom-xs'>Monday - Friday: 8:00AM - 5:30PM</p>
                        <p className='p color-white marginBottom-xs'>Saturday: 8:00AM - 12:00PM</p>
                        <p className='p color-white marginBottom-xs'>Sunday: Closed</p>
                        {/* this is a block or flex column */}
                    </div>
                    <div className='flex-column'>
                        <h4 className='h4 color-gold marginBottom-xs'>Contact Us</h4>
                        <p className='p color-white marginBottom-xs'>artihausconstruction@gmail.com</p>
                        <p className='p color-white marginBottom-xs'>+1(678) 260-5968</p>
                        <p className='p color-white marginBottom-xs'>4153 Brentwood Dr,<br />Buford GA 30518, United States</p>
                        <div className='flex-row gap-lg'>
                            <Link to='https://www.facebook.com/artihausconstruction' color='white' external icon='facebook' alt='facebook icon' />
                            <Link to='https://www.instagram.com/artihaus_construction' color='white' external icon='instagram' alt='instagram icon' />
                        </div>
                    </div>
                </div>
                <p className="p color-white marginTop-md text-center">© {new Date().getFullYear()} Artihaus Construction. UX/UI by Neves Design. Developed by Artihaus Construction. All rights reserved.</p>
            </div>
        </footer>
    )
};
export default Footer