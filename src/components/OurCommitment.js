import React from "react";

import CommitmentCards from './CommitmentCards'
import Link from "./Link";

const OurCommitment = ({className}) => {

    return (
        <section className='our-commitment u-backg-c-lightgray'>
        <div className='page-content-container'>
          <div className='our-commitment--describe'>
            <h1 className="u-h1 u-mr-bt-md">Our commitment to quality and excellence.</h1>
            <p className="u-p">What sets us apart is not just our quality and attention to detail, but our hands-on approach. We are fully present throughout the entire process, ensuring commitment and responsibility.</p>
          </div>
            <CommitmentCards className='home-our-commitment'/>
            <Link to='/about' text='Learn More' className='u-btn-md u-mr-tp-lg' color='white' backgroundColor='gold' icon='arrow'/>
        </div>
      </section>
    )
};
export default OurCommitment;