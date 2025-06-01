import React, { useEffect } from 'react';

import Certifications from '../components/Certifications';

import ImageHandler from '../components/ImageHandler';
import Image from '../Assets/gallery43.png';

import Reviews from '../components/Reviews';
import OurCommitment from '../components/OurCommitment';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';


const Home = () => {

  return (
    <main className='home'>
      <section className='image-container'>
        <ImageHandler src={Image} alt='carousel image' role='home--carousel' />
      </section>
      <WhoWeAre />
      <OurServices />
      <OurCommitment />
      <Certifications />
      <Reviews />
    </main>
  );
}; export default Home;