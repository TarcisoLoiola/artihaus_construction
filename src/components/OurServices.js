import React from "react";

import ImageRoleHandler from "./ImageRoleHandler";
import rec84 from '../Assets/Rectangle 84.png';
import Link from "./Link";

const OurServices = ({ className }) => {

    return (
        <section className='our-services'>
        <div className='page-content-container'>
          <h1>Our Services</h1>
          <div className='our-services--carousel'>
            <div className='image-role-handler' ><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /></div>
            <div className='image-role-handler' ><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /></div>
            <div className='image-role-handler' ><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /></div>
          </div>
          <div className='learnmore-btn-md'>
            <Link text='Learn More' to='/gallery' className='button' color='gold' background='white'  icon='arrow'/>
          </div>
        </div>
      </section>
    )
};
export default OurServices