import React from "react";

import ImageRoleHandler from "./ImageRoleHandler";
import rec84 from '../Assets/Rectangle 84.png';
import Link from "./Link";

const OurServices = ({ className }) => {

  return (
    <section className='our-services u-backg-c-gold'>
      <div className='page-content-container'>
        <h1 className="u-h1 text-center u-mr-bt-xl">Our Services</h1>
        <div className='our-services--carousel'>
          <div className='image-role-handler' ><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /></div>
          <div className='image-role-handler' ><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /></div>
          <div className='image-role-handler' ><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /></div>
        </div>
        <Link to='/gallery' text='Learn More' className='u-btn-md u-mr-tp-lg' color='gold' backgroundColor='white' icon='arrow' />
      </div>
    </section>
  )
};
export default OurServices