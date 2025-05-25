import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { GalleryContext } from "../context/GalleryContext";

import Certifications from '../components/Certifications';

import ImageHandler from '../components/ImageHandler';
import Image from '../Assets/gallery01.jpeg';

import Reviews from '../components/Reviews';
import OurCommitment from '../components/OurCommitment';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';


const Home = () => {
  const { } = useContext(GalleryContext);

  useEffect(() => {
    // window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

  return (
    <main className='home'>
      <section className='carousel-container'>
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