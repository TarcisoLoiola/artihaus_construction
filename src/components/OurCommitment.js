import React from "react";

import CommitmentCards from './CommitmentCards'
import Link from "./Link";

const OurCommitment = ({className}) => {

    return (
        <section className='our-commitment'>
        <div className='page-content-container'>
          <div className='our-commitment--describe'>
            <h1>Our commitment to quality and excellence.</h1>
            <p>What sets us apart is not just our quality and attention to detail, but our hands-on approach. We are fully present throughout the entire process, ensuring commitment and responsibility.</p>
          </div>
            <CommitmentCards className='home-our-commitment'/>
          <div className='learnmore-btn-md'>
            <Link text='Learn More' to='/about' className='button' color='white' background='gold' icon='arrow'/>
          </div>
        </div>
      </section>
    )
};
export default OurCommitment;