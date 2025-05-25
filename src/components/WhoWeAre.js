import React from "react";

import rec84 from '../Assets/Rectangle 84.png';
import ImageRoleHandler from "./ImageHandler";
import Stats from "./Stats";
import Link from "./Link";

const WhoWeAre = ({className}) => {

    return (
      <section className='who-we-are backgroundColor-white'>
        <div className='page-content-container'>
          <div className='who-we-are--describe'>
            <div className='--describe'>
              <h1 className="h1 marginBottom-sm">Who we are man?</h1>
              <h4 className="h4 color-gray">
                Transform Your Outdoors with Artihaus Construction
              </h4>
              <p className="p color-gray">
                At Artihaus Construction, we believe that outdoor spaces should be as inviting and functional as the interiors of a home. With over 20 years of experience in hardscape and landscape construction, we specialize in transforming yards into stunning, long-lasting outdoor living spaces.
              </p>
              <p className="p color-gray">
                From patios and retaining walls to walkways, driveways, and custom outdoor features, our craftsmanship is built to stand the test of time.
              </p>
            </div>
            <div className='image-role-handler'><ImageRoleHandler src={rec84} alt='who we are image' role='home--whoweare' /> </div>
          </div>
          <div className='who-we-are--stats'>
            <Stats />
          </div>
          <Link to='/about' text='Learn More' className='button-md marginTop-lg' color='white' backgroundColor='gold' icon='arrow' />
        </div>
      </section>
    )
};
export default WhoWeAre